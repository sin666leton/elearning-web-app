<?php

namespace App\Modules\Shared\Infrastructure\Auth;

use App\Models\User;
use App\Modules\Shared\Application\Contracts\AuthContract;
use App\Modules\Shared\Application\DTOs\AuthUserDTO;
use App\Modules\Shared\Exceptions\InvalidCredentialException;
use App\Modules\Shared\Utils\HideEmail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class SanctumAuthenticator implements AuthContract
{
    public function generateToken(\App\Modules\Shared\Application\Commands\AuthCommand $command): AuthUserDTO
    {
        $user = User::join('roles', 'users.role_id', '=', 'roles.id')
            ->select([
                'users.id',
                'users.role_id',
                'users.name',
                'users.email',
                'users.password',
                'roles.name as role_name'
            ])
            ->where('users.email', $command->email)
            ->first();

        if (is_null($user))
            throw new InvalidCredentialException();

        if (!Hash::check($command->password, $user->password))
            throw new InvalidCredentialException();

        Auth::login($user);

        return new AuthUserDTO(
            $user->id,
            $user->name,
            HideEmail::transform($user->email),
            $user->role_name,
        );
    }
}