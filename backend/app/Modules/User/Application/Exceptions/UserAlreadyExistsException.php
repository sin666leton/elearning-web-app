<?php

namespace App\Modules\User\Application\Exceptions;

use App\Modules\Shared\Exceptions\ApplicationException;

class UserAlreadyExistsException extends ApplicationException
{
    public function __construct()
    {
        $this->errors = ['email' => 'Email sudah terdaftar'];
        parent::__construct("Email sudah terdaftar", 409, "ALREADY_REGISTERED");
    }
}