<?php

namespace Tests\Feature;

use App\Models\Employee;
use App\Models\Role;
use App\Models\Branch;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class EmployeeTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    protected function setUp(): void
    {
        parent::setUp();
        
        // Create necessary test data
        $this->role = Role::factory()->create();
        $this->branch = Branch::factory()->create();
        $this->user = User::factory()->create();
        
        // Acting as authenticated user
        $this->actingAs($this->user);
    }

    /** @test */
    public function it_can_create_an_employee()
    {
        $employeeData = [
            'employee_ref' => 'EMP' . $this->faker->unique()->numberBetween(1000, 9999),
            'employee_code' => 'E' . $this->faker->unique()->numberBetween(10000, 99999),
            'title' => $this->faker->title(),
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'nic_number' => '19' . $this->faker->numerify('########') . 'V',
            'date_of_birth' => $this->faker->date(),
            'mobile_number_1' => $this->faker->phoneNumber(),
            'email' => $this->faker->unique()->safeEmail(),
            'hire_date' => $this->faker->date(),
            'role_id' => $this->role->id,
            'branch_id' => $this->branch->id,
            'is_active' => true,
        ];

        $employee = Employee::create($employeeData);

        $this->assertInstanceOf(Employee::class, $employee);
        $this->assertEquals($employeeData['employee_ref'], $employee->employee_ref);
        $this->assertEquals($employeeData['email'], $employee->email);
        $this->assertDatabaseHas('employees', ['id' => $employee->id]);
    }

    /** @test */
    public function it_requires_employee_ref_first_name_last_name_and_email()
    {
        $this->expectException('Illuminate\Database\QueryException');
        
        Employee::create([
            // Missing required fields
            'role_id' => $this->role->id,
            'branch_id' => $this->branch->id,
        ]);
    }

    /** @test */
    public function it_has_a_role_relationship()
    {
        $employee = Employee::factory()->create([
            'role_id' => $this->role->id,
            'branch_id' => $this->branch->id,
        ]);

        $this->assertInstanceOf(Role::class, $employee->role);
        $this->assertEquals($this->role->id, $employee->role->id);
    }

    /** @test */
    public function it_has_a_branch_relationship()
    {
        $employee = Employee::factory()->create([
            'role_id' => $this->role->id,
            'branch_id' => $this->branch->id,
        ]);

        $this->assertInstanceOf(Branch::class, $employee->branch);
        $this->assertEquals($this->branch->id, $employee->branch->id);
    }

    /** @test */
    public function it_can_soft_delete_an_employee()
    {
        $employee = Employee::factory()->create([
            'role_id' => $this->role->id,
            'branch_id' => $this->branch->id,
        ]);

        $employee->delete();

        $this->assertSoftDeleted('employees', ['id' => $employee->id]);
    }

    /** @test */
    public function it_can_scope_active_employees()
    {
        // Create 3 active employees
        $activeEmployees = Employee::factory()->count(3)->create([
            'is_active' => true,
            'role_id' => $this->role->id,
            'branch_id' => $this->branch->id,
        ]);

        // Create 2 inactive employees
        $inactiveEmployees = Employee::factory()->count(2)->create([
            'is_active' => false,
            'role_id' => $this->role->id,
            'branch_id' => $this->branch->id,
        ]);

        $active = Employee::active()->get();
        $inactive = Employee::where('is_active', false)->get();

        $this->assertCount(3, $active);
        $this->assertCount(2, $inactive);
    }

    /** @test */
    public function it_has_full_name_attribute()
    {
        $employee = Employee::factory()->create([
            'first_name' => 'John',
            'middle_name' => 'William',
            'last_name' => 'Doe',
            'role_id' => $this->role->id,
            'branch_id' => $this->branch->id,
        ]);

        $this->assertEquals('John William Doe', $employee->full_name);
    }
}
