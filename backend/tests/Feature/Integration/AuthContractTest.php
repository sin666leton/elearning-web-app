<?php

namespace Tests\Feature\Integration;

use App\Models\Role;
use App\Models\User;
use App\Modules\Shared\Application\Commands\AuthCommand;
use App\Modules\Shared\Application\Contracts\AuthContract;
use App\Modules\Shared\Application\DTOs\AuthUserDTO;
use App\Modules\Shared\Exceptions\InvalidCredentialException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use PHPUnit\Framework\Attributes\Group;
use Tests\TestCase;

#[Group('login')]
#[Group('integration')]
class AuthContractTest extends TestCase
{
    private AuthContract $service;

    use RefreshDatabase;

    private function createUser()
    {
        User::factory()
            ->state([
                'email' => 'example@mail.com',
                'password' => '12345'
            ])
            ->for(Role::factory()->createOne())
            ->createOne();
    }

    protected function setUp(): void
    {
        parent::setUp();

        $this->service = $this->app->make(AuthContract::class);
    }

    public function test_createToken_should_throw_InvalidCredentialException_when_user_not_found()
    {
        $this->expectException(InvalidCredentialException::class);
        $this->expectExceptionMessage('Email atau password salah');
        $this->expectExceptionCode(401);

        $this->service->generateToken(new AuthCommand(
            'test@example.com',
            'abcd'
        ));
    }

    public function test_createToken_should_throw_InvalidCredentialException_when_credential_not_match()
    {
        $this->expectException(InvalidCredentialException::class);
        $this->expectExceptionMessage('Email atau password salah');
        $this->expectExceptionCode(401);

        $this->createUser();

        $this->service->generateToken(new AuthCommand(
            'example@mail.com',
            'abcd'
        ));
    }

    public function test_createToken_should_return_AuthUserDTO()
    {
        $this->createUser();

        $result = $this->service->generateToken(new AuthCommand(
            'example@mail.com',
            '12345'
        ));

        $this->assertInstanceOf(AuthUserDTO::class, $result);
        $this->assertNotNull($result->token);
        $this->assertEquals('e*****e@mail.com', $result->email);
    }
}
