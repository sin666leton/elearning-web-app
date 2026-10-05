<?php

namespace App\Modules\Shared\Exceptions;

class ForbiddenRoleException extends ApplicationException
{
    public function __construct()
    {
        parent::__construct('Anda tidak dapat mengakses halaman ini', 403, 'FORBIDDEN_ROLE');
    }
}