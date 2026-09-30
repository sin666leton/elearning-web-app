<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Modules\Shared\Application\Commands\AuthCommand;
use App\Modules\User\Application\Usecases\LoginUsecase;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct(
        private LoginUsecase $usecase
    ) {
    }

    public function login(LoginRequest $request)
    {
        $result = $this->usecase->handle(new AuthCommand(
            $request->input('email'),
            $request->input('password')
        ));

        return response()->json([
            'data' => $result->toJSON()
        ]);
    }
}
