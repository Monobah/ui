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

use \App\Http\Controllers\DoctorController;
use \App\Http\Controllers\BannerController;
use \App\Http\Controllers\AppUserController;
use \App\Http\Controllers\CategoryController;
use \App\Http\Controllers\PromotionController;
use \App\Http\Controllers\SpecialityController;
use \App\Http\Controllers\DiagnosticController;
use \App\Http\Controllers\AppointmentController;

Route::middleware('authApi')->group(function () {
  Route::get('/banners', [BannerController::class, 'index']);
  Route::get('/categories', [CategoryController::class, 'index']);
  Route::get('/promotions', [PromotionController::class, 'index']);
  Route::get('/diagnostics', [DiagnosticController::class, 'index']);
  Route::get('/specialities', [SpecialityController::class, 'index']);

  Route::get('/doctors', [DoctorController::class, 'index']);
  Route::get('/doctors/{doctorId}', [DoctorController::class, 'show']);

  Route::get('/appointments', [AppointmentController::class, 'index']);
  Route::get('/appointments/{userId}', [AppointmentController::class, 'show']);

  Route::get('/user/{userId}', [AppUserController::class, 'show']);

  Route::post('/user/create', [AppUserController::class, 'store']);
  Route::post('/user/login', [AppUserController::class, 'login']);

  Route::post('/appointments/create', [AppointmentController::class, 'store']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});
