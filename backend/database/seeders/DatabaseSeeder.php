<?php

namespace Database\Seeders;

use App\Models\Classroom;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Role::factory()
            ->state(['name' => 'guru'])
            ->createOne();
        
        $student = Role::factory()
            ->state(['name' => 'murid'])
            ->createOne();

        for ($i=0; $i < 30; $i++) {
            $classroom = Classroom::factory()
                ->state(['name' => "Web Programming $i"])
                ->createOne();

            User::factory()
                ->state([
                    'role_id' => $student->id,
                    'classroom_id' => $classroom->id
                ])
                ->count(rand(10, 20))
                ->create();
        }
    }
}
