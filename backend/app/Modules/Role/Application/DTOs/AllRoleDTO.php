<?php

namespace App\Modules\Role\Application\DTOs;

class AllRoleDTO
{
    public function __construct(
        public readonly int $id,
        public readonly string $name
    ) {
    }

    public function toJSON(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name
        ];
    }
}