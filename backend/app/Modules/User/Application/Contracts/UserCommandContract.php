<?php

namespace App\Modules\User\Application\Contracts;

use App\Modules\Shared\Application\DTOs\AuthUserDTO;
use App\Modules\User\Application\Command\CreateUserCommand;


interface UserCommandContract
{
    public function checkByEmail(string $email): bool;

    public function create(CreateUserCommand $command): AuthUserDTO;
}