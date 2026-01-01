<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create 10 fake employees
        \App\Models\Employee::factory(10)->create();
        
        $this->command->info('Successfully created 10 employees!');
    }
}
