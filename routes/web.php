<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['auth'])->group(function() {
    Route::get('/', function () {
        return view('welcome');
    })->name('home');

    Route::get('/home', function () {
        return redirect()->route('home');
    });

    Route::get('/auth', 'UserController@getAuth');
    
    Route::resource( 'users' , 'UserController' );
    Route::resource( 'customers' , 'CustomerController' );
    Route::resource( 'cities' , 'CityController' );
    Route::resource( 'brand-types' , 'BrandTypeController' );
    Route::resource( 'seller-types' , 'SellerTypeController' );
    
    Route::get('user-roles', 'UserController@getUserRoles');
});

Auth::routes(['register' => false]);