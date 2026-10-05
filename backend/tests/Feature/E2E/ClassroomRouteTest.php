<?php

namespace Tests\Feature\E2E;

use App\Models\Role;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Sanctum\Sanctum;
use PHPUnit\Framework\Attributes\Group;
use Tests\TestCase;

#[Group('classroom')]
class ClassroomRouteTest extends TestCase
{
    use RefreshDatabase;

    private function fakeAuth()
    {
        $user = User::factory()
            ->for(Role::factory()->state(['name' => 'guru'])->createOne())
            ->createOne();

        Sanctum::actingAs($user);
    }

    protected function setUp(): void
    {
        parent::setUp();
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }

    #[Group('paginate-classroom')]
    public function test_index_should_return_403_when_role_not_teacher()
    {
        $user = User::factory()
            ->for(Role::factory()->state(['name' => 'murid'])->createOne())
            ->createOne();

        Sanctum::actingAs($user);

        $res = $this->getJson('/api/v1/classrooms');

        $res->assertStatus(403);
    }
}
