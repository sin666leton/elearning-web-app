<?php

namespace App\Modules\User\Application\Command;

class CreateUserCommand
{
    public function __construct(
        public readonly string $name,
        public readonly string $email,
        public readonly int $roleId,
        public readonly string $password,
    ) {
    }
}