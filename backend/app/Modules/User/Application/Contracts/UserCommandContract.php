<?php

use App\Models\User;

interface UserCommandContract
{
    public function findByEmail(string $email): User|null;
}