<?php

namespace Tests\Feature\Integration;

use App\Models\Role;
use App\Models\User;
use App\Modules\Shared\Application\DTOs\AuthUserDTO;
use App\Modules\User\Application\Command\CreateUserCommand;
use App\Modules\User\Application\Contracts\UserCommandContract;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use PHPUnit\Framework\Attributes\Group;
use Tests\TestCase;

#[Group('register')]
class UserCommandContractTest extends TestCase
{
    use RefreshDatabase;

    private UserCommandContract $service;

    protected function setUp(): void
    {
        parent::setUp();

        $this->service = $this->app->make(UserCommandContract::class);
    }

    public function test_create_should_add_new_user_and_return_authUserDTO()
    {
        $role = Role::factory()->createOne();

        $result = $this->service->create(new CreateUserCommand(
            'Zidan',
            'zidan@example.com',
            $role->id,
            'password'
        ));

        $this->assertInstanceOf(AuthUserDTO::class, $result);
        $this->assertEquals('z***n@example.com', $result->email);
    }
}
