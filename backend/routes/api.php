<?php

use App\Http\Controllers\ContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Rate limit: 5 requests per minute
Route::middleware(['throttle:5,1'])->group(function () {
    Route::post('/contacts', [ContactController::class, 'store']);
});

// Unprotected for demo simplicity
Route::get('/contacts', [ContactController::class, 'index']);