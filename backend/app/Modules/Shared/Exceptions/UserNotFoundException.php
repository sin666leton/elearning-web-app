<?php

namespace App\Modules\Shared\Exceptions;

class UserNotFoundException extends ApplicationException
{
    public function __construct()
    {
        parent::__construct("Pengguna tidak ditemukan", 404, "USER_NOT_FOUND");
    }
}