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

use \App\Http\Controllers\ProductController;
use \App\Http\Controllers\TagController;
use \App\Http\Controllers\CategoryController;
use \App\Http\Controllers\ColorController;
use \App\Http\Controllers\PromocodeController;
use \App\Http\Controllers\ReviewController;
use \App\Http\Controllers\SlideController;
use \App\Http\Controllers\BannerController;
use \App\Http\Controllers\PromotionController;
use \App\Http\Controllers\OrderController;

Route::middleware('authApi')->group(function () {
  Route::get('/products', [ProductController::class, 'index']);
  Route::get('/tags', [TagController::class, 'index']);
  Route::get('/colors', [ColorController::class, 'index']);
  Route::get('/categories', [CategoryController::class, 'index']);
  Route::get('/promocodes', [PromocodeController::class, 'index']);
  Route::get('/reviews', [ReviewController::class, 'index']);
  Route::get('/slides', [SlideController::class, 'index']);
  Route::get('/banners', [BannerController::class, 'index']);
  Route::get('/promotions', [PromotionController::class, 'index']);

  Route::post('/order/create', [OrderController::class, 'create']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});
