<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\SuperController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});


// AUTHENTIFICATION
Route::post('/auth/register', [UserController::class, 'createUser']);
Route::post('/auth/login', [UserController::class, 'loginUser']);
Route::put('/auth/edit/{id}', [UserController::class, 'updateUser']);
Route::delete('/auth/delete/{id}', [UserController::class, 'deleteUser']);
Route::get('/users', [UserController::class, 'getAllUsers']);



// ROLE
Route::post('/role/create', [RoleController::class, 'store']);
Route::get('/roles', [RoleController::class, 'index']);
Route::put('/roles/{role}', [RoleController::class, 'update']);
Route::delete('/roles/{role}', [RoleController::class, 'destroy']);


// SUPER
Route::post('/super/create', [SuperController::class, 'createUser']);
Route::post('/super/login', [SuperController::class, 'loginUser']);
Route::get('/supers', [SuperController::class, 'getAllUsers']);
Route::put('/super/{role}', [SuperController::class, 'updateUser']);
Route::delete('/super/{id}', [SuperController::class, 'deleteUser']);