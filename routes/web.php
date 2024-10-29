<?php

use App\Http\Controllers\ExampleInertiaController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {

    return Inertia::render('App/Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::middleware([
    config('jetstream.auth_session'),
    'auth:sanctum',
    'verified',
])
    ->prefix('dashboard')
    ->group(function () {
        Route::get('/', function () {
            return Inertia::render('Admin/Dashboard');
        })->name('dashboard');


        Route::resource('examples', ExampleInertiaController::class)->except(['create', 'edit']);
    });
