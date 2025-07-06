<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Authentication route
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Employee routes group with 'api' middleware and 'employee' prefix
Route::group([
    'middleware' => 'api',
    'prefix' => 'employee'
], function ($router) {
    // Employee Resource Routes
    $router->get('/', [\App\Http\Controllers\EmployeeController::class, 'index']);
    $router->post('/', [\App\Http\Controllers\EmployeeController::class, 'store']);
    $router->get('{employee}', [\App\Http\Controllers\EmployeeController::class, 'show']);
    $router->put('{employee}', [\App\Http\Controllers\EmployeeController::class, 'update']);
    $router->delete('{employee}', [\App\Http\Controllers\EmployeeController::class, 'destroy']);
    
    // Additional Employee Routes
    $router->post('{employee}/restore', [\App\Http\Controllers\EmployeeController::class, 'restore']);
    $router->put('{employee}/status', [\App\Http\Controllers\EmployeeController::class, 'updateStatus']);
    $router->get('options/filter', [\App\Http\Controllers\EmployeeController::class, 'getFilterOptions']);
});
