<?php

namespace App\Modules\Role\Infrastructure\Repositories\Queries;

use App\Models\Role;
use App\Modules\Role\Application\Contracts\RoleQueryContract;
use App\Modules\Role\Application\DTOs\AllRoleDTO;

class RoleQueryRepository implements RoleQueryContract
{
    public function getAll(): array
    {
        $roles = Role::select(['id', 'name'])
            ->get();

        return $roles->map(fn($role) => new AllRoleDTO(
            $role->id,
            $role->name
        ))->toArray();
    }
}