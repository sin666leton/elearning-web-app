<?php

namespace App\Modules\Shared\Application\DTOs;

class AuthUserDTO
{
    public function __construct(
        public readonly int $id,
        public readonly string $name,
        public readonly string $email,
        public readonly string $roleName,
        public readonly string $token
    ) {
    }

    public function toJSON()
    {
        return [
            'user' => [
                'id' => $this->id,
                'name' => $this->name,
                'email' => $this->email,
                'role' => $this->roleName
            ],
            'token' => $this->token
        ];
    }
}