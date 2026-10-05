<?php

namespace Tests\Unit;

use App\Modules\Shared\Application\Contracts\RoleSharedContract;
use App\Modules\Shared\Application\DTOs\AuthUserDTO;
use App\Modules\Shared\Exceptions\RoleNotFoundException;
use App\Modules\User\Application\Command\CreateUserCommand;
use App\Modules\User\Application\Contracts\UserCommandContract;
use App\Modules\User\Application\Exceptions\UserAlreadyExistsException;
use App\Modules\User\Application\Usecases\RegisterUsecase;
use Mockery;
use Mockery\MockInterface;
use PHPUnit\Framework\Attributes\Group;
use PHPUnit\Framework\TestCase;

#[Group('register')]
class RegisterUsecaseTest extends TestCase
{
    /**
     * @var RoleSharedContract&MockInterface
     */
    private RoleSharedContract $role;

    /**
     * 
     * @var MockInterface&UserCommandContract
     */
    private UserCommandContract $user;
    private RegisterUsecase $usecase;

    private function createCommand(): CreateUserCommand
    {
        return new CreateUserCommand(
            'Zidan',
            'zidan@example.com',
            1,
            'password'
        );
    }

    protected function setUp(): void
    {
        parent::setUp();

        $this->role = Mockery::mock(RoleSharedContract::class);
        $this->user = Mockery::mock(UserCommandContract::class);

        $this->usecase = new RegisterUsecase($this->role, $this->user);
    }

    public function test_should_throw_rolenotfoundexception_when_role_not_exists()
    {
        $this->expectException(RoleNotFoundException::class);
        $this->expectExceptionMessage('Role tidak valid');
        $this->expectExceptionCode(422);

        $this->role->shouldReceive('exists')
            ->once()
            ->with(1)
            ->andReturn(false);

        $this->usecase->handle($this->createCommand());

        $this->user->shouldNotReceive('create');
    }

    public function test_should_throw_useralreadyexists_when_user_exists()
    {
        $this->expectException(UserAlreadyExistsException::class);
        $this->expectExceptionMessage('Email sudah terdaftar');
        $this->expectExceptionCode(409);

        $this->role->shouldReceive('exists')
            ->once()
            ->with(1)
            ->andReturn(true);

        $this->user->shouldReceive('checkByEmail')
            ->once()
            ->with('zidan@example.com')
            ->andReturn(true);

        $this->usecase->handle($this->createCommand());
    }

    public function test_should_return_authuserdto()
    {
        $command = $this->createCommand();

        $this->role->shouldReceive('exists')
            ->once()
            ->with(1)
            ->andReturn(true);

        $this->user->shouldReceive('checkByEmail')
            ->once()
            ->with('zidan@example.com')
            ->andReturn(false);

        $expectedDto = new AuthUserDTO(
            1,
            'Zidan',
            'z***n@mail.com',
            'Student',
        );

        $this->user->shouldReceive('create')
            ->once()
            ->with($command)
            ->andReturn($expectedDto);

        $result = $this->usecase->handle($command);

        $this->assertInstanceOf(AuthUserDTO::class, $result);
        $this->assertEquals('z***n@mail.com', $result->email);
    }
}
