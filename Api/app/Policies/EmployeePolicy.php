<?php

namespace App\Policies;

use App\Models\Employee;
use App\Models\User;
use Illuminate\Auth\Access\Response;
use Illuminate\Support\Facades\Log;

class EmployeePolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        // Allow viewing if user has any employee-related permission
        return $user->can('view employees') || 
               $user->can('manage employees') ||
               $user->hasRole('admin');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Employee $employee): bool
    {
        // Allow if user is an admin, has manage permission, or is viewing their own profile
        if ($user->hasRole('admin') || $user->can('manage employees')) {
            return true;
        }

        // Employees can view their own profile
        if ($user->employee && $user->employee->id === $employee->id) {
            return true;
        }

        // Managers can view employees in their branch
        if ($user->hasRole('manager') && $user->employee && $user->employee->branch_id === $employee->branch_id) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        // Only admin or users with manage employees permission can create
        return $user->can('manage employees') || $user->hasRole('admin');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Employee $employee): bool
    {
        // Admin can update any employee
        if ($user->hasRole('admin')) {
            return true;
        }

        // Users with manage employees permission can update any employee
        if ($user->can('manage employees')) {
            return true;
        }

        // Employees can update their own profile
        if ($user->employee && $user->employee->id === $employee->id) {
            return true;
        }

        // Managers can update employees in their branch
        if ($user->hasRole('manager') && $user->employee && $user->employee->branch_id === $employee->branch_id) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Employee $employee): bool
    {
        // Prevent users from deleting themselves
        if ($user->employee && $user->employee->id === $employee->id) {
            return false;
        }

        // Only admin can delete employees
        return $user->hasRole('admin');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Employee $employee): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Employee $employee): bool
    {
        //
    }
}
