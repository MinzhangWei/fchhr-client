<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Route::get('/', 'WelcomeController@index');

// Route::get('home', 'HomeController@index');

// Route::controllers([
// 	'auth' => 'Auth\AuthController',
// 	'password' => 'Auth\PasswordController',
// ]);

// mobile app
Route::get('/m', 'AppController@index');

// mobile app API
Route::group(['prefix' => 'api/v1'], function()
{
	// 首页热门的项目
	Route::get('projects/hot', 'ApiController@hotProjects');
	// 我推荐的客户
	Route::get('my/customers', 'ApiController@myCustomers');
});