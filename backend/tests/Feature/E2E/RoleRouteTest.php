<?php

namespace Tests\Feature\E2E;

use App\Models\Role;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use PHPUnit\Framework\Attributes\Group;
use Tests\TestCase;

class RoleRouteTest extends TestCase
{
    use RefreshDatabase;

    private function createRole(int $count)
    {
        return Role::factory()->count($count)->create();
    }

    protected function setUp(): void
    {
        parent::setUp();
    }

    #[Group('register')]
    public function test_index_should_return_200()
    {
        $roles = $this->createRole(3);
        $result = $this->getJson('/api/v1/roles');

        $result
            ->assertStatus(200)
            ->assertJson([
                'data' => [
                    ...$roles->map(fn($role) => ['id' => $role->id, 'name' => $role->name])
                ]
            ]);
    }
}