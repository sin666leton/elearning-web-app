<?php

namespace App\Modules\Shared\Exceptions;

use RuntimeException;

class ApplicationException extends RuntimeException
{
    public string $statusCode;

    public array $errors = [];

    public function __construct(string $message = "", int $code = 0, string $statusCode = "ERROR")
    {
        $this->statusCode = $statusCode;

        parent::__construct($message, $code);

    }
}