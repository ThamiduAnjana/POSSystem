<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create default roles if they don't exist
        if (!\App\Models\Role::exists()) {
            $this->call(RoleSeeder::class);
        }

        // Create default branch if it doesn't exist
        if (!\App\Models\Branch::exists()) {
            \App\Models\Branch::create([
                'name' => 'Head Office',
                'code' => 'HO',
                'is_active' => true,
            ]);
        }

        // Create default admin user if it doesn't exist
        if (!\App\Models\User::where('email', 'admin@example.com')->exists()) {
            \App\Models\User::create([
                'name' => 'Admin User',
                'email' => 'admin@example.com',
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
            ]);
        }

        // Create employees
        $this->call(EmployeeSeeder::class);
    }
}
