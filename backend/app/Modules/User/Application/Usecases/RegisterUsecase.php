<?php

namespace App\Modules\User\Application\Usecases;

use App\Modules\Shared\Application\Contracts\RoleSharedContract;
use App\Modules\Shared\Exceptions\RoleNotFoundException;
use App\Modules\User\Application\Command\CreateUserCommand;
use App\Modules\User\Application\Contracts\UserCommandContract;
use App\Modules\User\Application\Exceptions\UserAlreadyExistsException;

class RegisterUsecase
{
    public function __construct(
        private RoleSharedContract $role,
        private UserCommandContract $user
    ) {
    }

    public function handle(CreateUserCommand $command)
    {
        if (!$this->role->exists($command->roleId))
            throw new RoleNotFoundException();
        if ($this->user->checkByEmail($command->email))
            throw new UserAlreadyExistsException();

        $result = $this->user->create($command);

        return $result;
    }
}