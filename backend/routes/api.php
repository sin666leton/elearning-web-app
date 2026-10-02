<?php

use App\Http\Controllers\v1\AuthController;
use App\Http\Controllers\v1\RoleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('/v1')->group(function () {
    Route::controller(AuthController::class)->group(function () {
        Route::post('/login', 'login')->middleware('unauthOnly');
        Route::post('/register', 'register')->middleware('unauthOnly');
    });

    Route::controller(RoleController::class)->group(function () {
        Route::get('/roles', 'index');
    });
});