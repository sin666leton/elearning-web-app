<?php

namespace App\Modules\Role\Application\Contracts;

use App\Modules\Role\Application\DTOs\AllRoleDTO;

interface RoleQueryContract
{
    /**
     * @return AllRoleDTO[]
     */
    public function getAll(): array;
}