<?php

namespace App\Modules\Shared\Application\Contracts;

use App\Modules\Shared\Application\Commands\AuthCommand;
use App\Modules\Shared\Application\DTOs\AuthUserDTO;

interface AuthContract
{
    public function generateToken(AuthCommand $command): AuthUserDTO;
}