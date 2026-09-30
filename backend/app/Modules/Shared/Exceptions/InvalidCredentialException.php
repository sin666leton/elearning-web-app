<?php

namespace App\Modules\Shared\Exceptions;

class InvalidCredentialException extends ApplicationException
{
    public function __construct()
    {
        parent::__construct('Email atau password salah', 401, 'INVALID_CREDENTIAL');
    }
}