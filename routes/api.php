<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\RoleController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/auth/register', [UserController::class, 'createUser']);
Route::post('/auth/login', [UserController::class, 'loginUser']);

Route::post('/role/create', [RoleController::class, 'store']);