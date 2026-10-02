<?php

namespace Tests\Feature\Integration;

use App\Models\Role;
use App\Modules\Role\Application\Contracts\RoleQueryContract;
use App\Modules\Role\Application\DTOs\AllRoleDTO;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use PHPUnit\Framework\Attributes\Group;
use Tests\TestCase;

#[Group('current')]
class RoleQueryContractTest extends TestCase
{
    private RoleQueryContract $contract;

    use RefreshDatabase;

    private function createRole()
    {
        return Role::factory()->count(3)->create();
    }

    protected function setUp(): void
    {
        parent::setUp();

        $this->contract = $this->app->make(RoleQueryContract::class);
    }

    #[Group('register')]
    public function test_get_all_should_return_array_of_AllRoleDTO()
    {
        $this->createRole();

        $result = $this->contract->getAll();

        $this->assertIsArray($result);
        $this->assertCount(3, $result);
        foreach ($result as $value) {
            $this->assertInstanceOf(AllRoleDTO::class, $value);
        }
    }
}
