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

Route::middleware(['auth'])->group(function () {
    Route::get('/', function () {
        return view('welcome');
    })->name('home');

    Route::get('/home', function () {
        return redirect()->route('home');
    });

    Route::get('/auth', 'UserController@getAuth');

    Route::resource('users', 'UserController');
    Route::resource('customers', 'CustomerController');
    Route::resource('cities', 'CityController');
    Route::resource('visits', 'VisitController');
    Route::resource('orders', 'OrderController');
    Route::resource('brand-types', 'BrandTypeController');
    Route::resource('seller-types', 'SellerTypeController');
    Route::resource('products', 'ProductController');
    Route::resource('products-uses', 'ProductUseController');
    Route::resource('products-descriptions', 'ProductDescriptionController');
    Route::resource('products-categories', 'ProductCategoryController');
    Route::resource('products-attributes', 'ProductAttributeController');

    Route::get('user-roles', 'UserController@getUserRoles');
});

Auth::routes(['register' => false]);
