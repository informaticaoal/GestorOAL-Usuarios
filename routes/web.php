<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UsuarioOALController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DocumentosUsuariosController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::any('/generatePDF', [UsuarioOALController::class, 'createPDF'])->middleware(['auth', 'verified']);

Route::get('/excel/export', [UsuarioOALController::class, 'exportExcel'])->middleware(['auth', 'verified'])->name('exportExcel');

Route::post('/excel/import', [UsuarioOALController::class, 'importExcel'])->middleware(['auth', 'verified'])->name('importExcel');

Route::get('/dashboard', [UsuarioOALController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/search', [UsuarioOALController::class, 'search'])->middleware(['auth', 'verified'])->name('search');

Route::get('/excel', [UsuarioOALController::class, 'excelIndex'])->middleware(['auth', 'verified'])->name('excelIndex');

Route::resource('usuario_oal', UsuarioOALController::class)->middleware(['auth', 'verified']);

Route::get('/usuarioGestor/all', [UserController::class, 'getAll'])->middleware(['auth', 'verified']);

Route::get('/usuario_oal/{id}/getsocialmedia', [UsuarioOALController::class, 'getSocialMedia'])->middleware(['auth', 'verified']);
Route::get('/usuario_oal/{id}/getdocente', [UsuarioOALController::class, 'getDocente'])->middleware(['auth', 'verified']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/usuario/{id}/edad', [UsuarioOALController::class, 'getEdad'])->middleware(['auth', 'verified']);

Route::get('/usuario/{id}/fecha-activacion', [UsuarioOALController::class, 'getFechaActivacion'])->middleware(['auth', 'verified']);

Route::get('/usuario_oal/{id}/specialties', [UsuarioOALController::class, 'getSpecialties'])->middleware(['auth', 'verified']);

Route::get('/usuario_oal/{id}/carnet', [UsuarioOALController::class, 'getCarnet'])->middleware(['auth', 'verified']);

Route::get('/usuario_oal/{id}/docs', [DocumentosUsuariosController::class, 'getDocsByUser'])->middleware(['auth', 'verified']);

Route::get('/usuario_oal/checkdni/{dni}', [UsuarioOALController::class, 'checkDNI'])->middleware(['auth', 'verified']);

Route::get('/usuario_oal/{id}/necesidad-formativa', [UsuarioOALController::class, 'getNecesidadFormativa'])->middleware(['auth', 'verified']);

Route::put('/usuario_oal/search/{id}', [UsuarioOALController::class, 'updateThroughSearch'])->middleware(['auth', 'verified']);

Route::post('/usuario/search', [UsuarioOALController::class, 'searchUsers'])->middleware(['auth', 'verified']);

Route::post('/usuario_oal/adddocs', [DocumentosUsuariosController::class, 'store'])->middleware(['auth', 'verified']);

Route::post('/usuario_oal/search/adddocs', [DocumentosUsuariosController::class, 'storeThroughSearch'])->middleware(['auth', 'verified']);

Route::delete('/documento/{id}', [DocumentosUsuariosController::class, 'destroy'])->middleware(['auth', 'verified']);

Route::delete('/documento/search/{id}', [DocumentosUsuariosController::class, 'destroyThroughSearch'])->middleware(['auth', 'verified']);

Route::get('/register', [UserController::class, 'register'])->middleware(['auth', 'verified']);

Route::post('/register', [UserController::class, 'create'])->middleware(['auth', 'verified']);

require __DIR__.'/auth.php';