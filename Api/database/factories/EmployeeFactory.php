<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = \Faker\Factory::create();
        $gender = $faker->randomElement(['male', 'female']);
        
        return [
            'employee_ref' => 'EMP' . $faker->unique()->numberBetween(1000, 9999),
            'employee_code' => 'E' . $faker->unique()->numberBetween(10000, 99999),
            'title' => $faker->title($gender),
            'first_name' => $faker->firstName($gender),
            'middle_name' => $faker->optional(0.7)->firstName($gender), // 70% chance of having a middle name
            'last_name' => $faker->lastName,
            'nic_number' => $faker->unique()->regexify('19[0-9]{9}[VX]'),
            'date_of_birth' => $faker->dateTimeBetween('-50 years', '-20 years')->format('Y-m-d'),
            'mobile_number_1' => $faker->phoneNumber,
            'mobile_number_2' => $faker->optional(0.3)->phoneNumber, // 30% chance of having a second number
            'email' => $faker->unique()->safeEmail,
            'custom_field_1' => $faker->optional()->word,
            'custom_field_2' => $faker->optional()->word,
            'custom_field_3' => $faker->optional()->word,
            'custom_field_4' => $faker->optional()->word,
            'hire_date' => $faker->dateTimeBetween('-10 years', 'now')->format('Y-m-d'),
            'role_id' => \App\Models\Role::inRandomOrder()->first()?->id ?? 1,
            'branch_id' => \App\Models\Branch::inRandomOrder()->first()?->id ?? 1,
            'is_active' => $faker->boolean(90), // 90% chance of being active
            'created_by' => 1, // Assuming user with ID 1 exists
            'updated_by' => 1,
        ];
    }
}
