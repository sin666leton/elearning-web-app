<?php

namespace App\Modules\User\Infrastructure\Repositories\Commands;

use App\Models\User;
use App\Modules\Shared\Application\DTOs\AuthUserDTO;
use App\Modules\Shared\Utils\HideEmail;
use App\Modules\User\Application\Contracts\UserCommandContract;

class UserCommandRepository implements UserCommandContract
{
    public function checkByEmail(string $email): bool
    {
        return User::select(['id', 'email'])
            ->where('email', $email)
            ->exists();
    }

    public function create(\App\Modules\User\Application\Command\CreateUserCommand $command): AuthUserDTO
    {
        $user = User::create([
            'role_id' => $command->roleId,
            'email' => $command->email,
            'name' => $command->name,
            'password' => $command->password
        ]);

        return new AuthUserDTO(
            $user->id,
            $user->name,
            HideEmail::transform($user->email),
            $user->role->name,
            $user->createToken('auth-token')->plainTextToken
        );
    }
}