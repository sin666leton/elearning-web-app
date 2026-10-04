<?php

namespace App\Modules\Shared\Application\DTOs;

class AuthUserDTO
{
    public function __construct(
        public readonly int $id,
        public readonly string $name,
        public readonly string $email,
        public readonly string $roleName,
    ) {
    }

    public function toJSON()
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'role' => $this->roleName
        ];
    }
}