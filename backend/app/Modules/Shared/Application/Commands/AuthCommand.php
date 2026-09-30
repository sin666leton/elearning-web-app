<?php

namespace App\Modules\Shared\Application\Commands;

class AuthCommand
{
    public function __construct(
        public readonly string $email,
        public readonly string $password
    ) {
    }
}