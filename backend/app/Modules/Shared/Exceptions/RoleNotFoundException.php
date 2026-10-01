<?php

namespace App\Modules\Shared\Exceptions;

class RoleNotFoundException extends ApplicationException
{
    public function __construct()
    {
        parent::__construct('Role tidak valid', 422, "VALIDATION_ERROR");
    }
}