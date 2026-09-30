<?php

namespace App\Modules\Shared\Utils;

class HideEmail
{
    public static function transform(string $email): string
    {
        $parts = explode('@', $email);

        if (count($parts) !== 2) {
            return $email;
        }

        $username = $parts[0];
        $domain = $parts[1];
        $length = strlen($username);

        if ($length <= 2) {
            $censoredUsername = substr($username, 0, 1) . str_repeat('*', $length - 1);
        } else {
            $censoredUsername = substr($username, 0, 1) . str_repeat('*', $length - 2) . substr($username, -1);
        }

        return $censoredUsername . '@' . $domain;

    }
}