<?php

namespace App\Modules\Shared\Application\Contracts;

interface RoleSharedContract
{
    public function exists(int $id): bool;
}