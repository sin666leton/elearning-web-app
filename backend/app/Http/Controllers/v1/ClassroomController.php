<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Modules\Classroom\Application\PaginateClassroomUsecase;
use Illuminate\Http\Request;

class ClassroomController extends Controller
{
    public function __construct(
        private PaginateClassroomUsecase $usecase
    ) {}

    public function index(Request $request)
    {
        $res = $this->usecase->handle($request->query('page', 1));

        return response()->json([
            'data' => $res->toJSON()
        ], 200);
    }
}
