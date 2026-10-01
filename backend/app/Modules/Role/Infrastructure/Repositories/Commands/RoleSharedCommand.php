<?php

namespace App\Modules\Role\Infrastructure\Repositories\Commands;

use App\Models\Role;
use App\Modules\Shared\Application\Contracts\RoleSharedContract;

class RoleSharedCommand implements RoleSharedContract
{
    public function exists(int $id): bool
    {
        return Role::select(['id'])
            ->where('id', $id)
            ->exists();
    }
}