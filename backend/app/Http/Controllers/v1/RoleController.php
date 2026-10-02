<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Modules\Role\Application\Usecases\GetAllRoleUsecase;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function __construct(
        private GetAllRoleUsecase $getAll
    ) {
    }

    public function index()
    {
        $roles = $this->getAll->handle();

        return response()->json([
            'data' => $roles
        ]);
    }
}
