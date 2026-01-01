<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Role;
use App\Models\Branch;
use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Requests\UpdateEmployeeRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource with pagination and search.
     */
    public function index(Request $request): JsonResponse
    {
        // Validate pagination parameters
        $request->validate([
            'page_number' => 'nullable|integer|min:1',
            'page_size' => 'nullable|integer|min:1|max:100',
            'search' => 'nullable|string|max:255',
            'status' => 'nullable|in:active,inactive',
            'branch_id' => 'nullable|exists:branches,id',
            'role_id' => 'nullable|exists:roles,id',
            'sort_field' => 'nullable|in:first_name,last_name,email,employee_code,created_at',
            'sort_direction' => 'nullable|in:asc,desc',
        ]);

        $query = Employee::with(['role', 'branch']);

        // Search functionality
        if ($search = $request->input('search')) {
            $query->where(function($q) use ($search) {
                $q->where('employee_ref', 'like', "%{$search}%")
                  ->orWhere('employee_code', 'like', "%{$search}%")
                  ->orWhere('first_name', 'like', "%{$search}%")
                  ->orWhere('last_name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('mobile_number_1', 'like', "%{$search}%");
            });
        }

        // Filter by status
        if ($request->has('status')) {
            $query->where('is_active', $request->status === 'active');
        }

        // Filter by branch
        if ($branchId = $request->input('branch_id')) {
            $query->where('branch_id', $branchId);
        }

        // Filter by role
        if ($roleId = $request->input('role_id')) {
            $query->where('role_id', $roleId);
        }

        // Sorting
        $sortField = $request->input('sort_field', 'created_at');
        $sortDirection = $request->input('sort_direction', 'desc');
        $query->orderBy($sortField, $sortDirection);

        // Pagination
        $pageNumber = $request->input('page_number', 1);
        $pageSize = $request->input('page_size', 15);
        
        $employees = $query->paginate(
            perPage: $pageSize,
            columns: ['*'],
            pageName: 'page',
            page: $pageNumber
        );

        return response()->json($employees);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEmployeeRequest $request): JsonResponse
    {
        try {
            DB::beginTransaction();

            $data = $request->validated();
            $data['created_by'] = auth()->id();
            $data['updated_by'] = auth()->id();

            $employee = Employee::create($data);

            // Handle media upload if needed
            if ($request->hasFile('profile_image')) {
                // Add your media handling logic here
            }

            DB::commit();

            return response()->json([
                'message' => 'Employee created successfully',
                'data' => $employee->load(['role', 'branch']),
            ], 201);

        } catch (\Exception $e) {
            DB::rollBack();
            \Log::error('Employee creation failed: ' . $e->getMessage());
            return response()->json([
                'message' => 'Failed to create employee',
                'error' => config('app.debug') ? $e->getMessage() : null,
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee): JsonResponse
    {
        return response()->json([
            'data' => $employee->load(['role', 'branch', 'address', 'media']),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEmployeeRequest $request, Employee $employee): JsonResponse
    {
        try {
            DB::beginTransaction();

            $data = $request->validated();
            $data['updated_by'] = auth()->id();

            // Don't update the created_by field
            unset($data['created_by']);

            $employee->update($data);

            // Handle media update if needed
            if ($request->hasFile('profile_image')) {
                // Add your media handling logic here
            }

            DB::commit();

            return response()->json([
                'message' => 'Employee updated successfully',
                'data' => $employee->fresh(['role', 'branch']),
            ]);

        } catch (\Exception $e) {
            DB::rollBack();
            \Log::error('Employee update failed: ' . $e->getMessage());
            return response()->json([
                'message' => 'Failed to update employee',
                'error' => config('app.debug') ? $e->getMessage() : null,
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee): JsonResponse
    {
        try {
            $employee->delete();

            return response()->json([
                'message' => 'Employee deleted successfully',
            ]);

        } catch (\Exception $e) {
            \Log::error('Employee deletion failed: ' . $e->getMessage());
            return response()->json([
                'message' => 'Failed to delete employee',
                'error' => config('app.debug') ? $e->getMessage() : null,
            ], 500);
        }
    }

    /**
     * Restore the specified soft deleted resource.
     */
    public function restore($id): JsonResponse
    {
        try {
            $employee = Employee::withTrashed()->findOrFail($id);
            $employee->restore();

            return response()->json([
                'message' => 'Employee restored successfully',
                'data' => $employee,
            ]);

        } catch (\Exception $e) {
            \Log::error('Employee restoration failed: ' . $e->getMessage());
            return response()->json([
                'message' => 'Failed to restore employee',
                'error' => config('app.debug') ? $e->getMessage() : null,
            ], 500);
        }
    }

    /**
     * Get options for employee filters.
     */
    public function getFilterOptions(): JsonResponse
    {
        return response()->json([
            'roles' => Role::select('id', 'name')->get(),
            'branches' => Branch::select('id', 'name')->get(),
        ]);
    }

    /**
     * Update employee status.
     */
    public function updateStatus(Employee $employee, Request $request): JsonResponse
    {
        $request->validate([
            'is_active' => 'required|boolean',
        ]);

        $employee->update([
            'is_active' => $request->is_active,
            'updated_by' => auth()->id(),
        ]);

        return response()->json([
            'message' => 'Employee status updated successfully',
            'data' => $employee,
        ]);
    }
}
