<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\StoreUserRequest;
use App\Modules\Shared\Application\Commands\AuthCommand;
use App\Modules\User\Application\Command\CreateUserCommand;
use App\Modules\User\Application\Usecases\LoginUsecase;
use App\Modules\User\Application\Usecases\RegisterUsecase;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct(
        private LoginUsecase $login,
        private RegisterUsecase $register
    ) {
    }

    public function register(StoreUserRequest $request)
    {
        $result = $this->register->handle(new CreateUserCommand(
            $request->input('name'),
            $request->input('email'),
            $request->input('role_id'),
            $request->input('password')
        ));

        $request->session()->regenerate();

        return response()->json([
            'data' => $result->toJSON()
        ]);
    }

    public function login(LoginRequest $request)
    {
        $result = $this->login->handle(new AuthCommand(
            $request->input('email'),
            $request->input('password')
        ));

        $request->session()->regenerate();

        return response()->json([
            'data' => $result->toJSON()
        ]);
    }
}
