<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEmployeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; // Update this based on your authorization logic
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $employeeId = $this->route('employee');
        
        return [
            'employee_ref' => [
                'required',
                'string',
                'max:50',
                'unique:employees,employee_ref,' . $employeeId,
            ],
            'employee_code' => [
                'required',
                'string',
                'max:50',
                'unique:employees,employee_code,' . $employeeId,
            ],
            'title' => 'nullable|string|max:20',
            'first_name' => 'required|string|max:100',
            'middle_name' => 'nullable|string|max:100',
            'last_name' => 'required|string|max:100',
            'nic_number' => [
                'required',
                'string',
                'max:20',
                'regex:/^[0-9]{9}[VvXx]?$/',
                'unique:employees,nic_number,' . $employeeId,
            ],
            'date_of_birth' => 'required|date|before:today',
            'mobile_number_1' => 'required|string|max:20',
            'mobile_number_2' => 'nullable|string|max:20',
            'email' => [
                'required',
                'email',
                'max:100',
                'unique:employees,email,' . $employeeId,
            ],
            'custom_field_1' => 'nullable|string|max:255',
            'custom_field_2' => 'nullable|string|max:255',
            'custom_field_3' => 'nullable|string|max:255',
            'custom_field_4' => 'nullable|string|max:255',
            'hire_date' => 'required|date',
            'role_id' => 'required|exists:roles,id',
            'branch_id' => 'required|exists:branches,id',
            'is_active' => 'boolean',
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'nic_number.regex' => 'The NIC number format is invalid. It should be 9 digits followed by V or X.',
            'date_of_birth.before' => 'The date of birth must be a date before today.',
            'email.unique' => 'This email is already in use by another employee.',
            'employee_ref.unique' => 'This employee reference already exists.',
            'employee_code.unique' => 'This employee code already exists.',
            'nic_number.unique' => 'This NIC number is already registered.',
        ];
    }
}
