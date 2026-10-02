<?php

namespace App\Modules\Role\Application\Usecases;

use App\Modules\Role\Application\Contracts\RoleQueryContract;
use App\Modules\Role\Application\DTOs\AllRoleDTO;

class GetAllRoleUsecase
{
    public function __construct(
        private RoleQueryContract $contract
    ) {
    }

    public function handle(): array
    {
        return $this->contract->getAll();
    }
}