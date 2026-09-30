<?php

namespace App\Modules\User\Application\Usecases;

use App\Modules\Shared\Application\Commands\AuthCommand;
use App\Modules\Shared\Application\Contracts\AuthContract;
use App\Modules\Shared\Application\DTOs\AuthUserDTO;
use App\Modules\Shared\Exceptions\UserNotFoundException;

class LoginUsecase
{
    public function __construct(
        private AuthContract $auth
    ) {
    }

    public function handle(AuthCommand $command): AuthUserDTO
    {
        $result = $this->auth->generateToken($command);

        return $result;
    }
}