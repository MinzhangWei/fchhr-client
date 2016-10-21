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
	Route::get('projects/hot', 'ApiController@projectsHot');
	// 所有项目
	Route::get('projects/all', 'ApiController@projectsAll');
	// 我推荐的客户
	Route::get('my/customers', 'ApiController@myCustomers');
	// 推荐客户
	Route::any('new/customer', 'ApiController@newCustomer');

	// project detail
	Route::get('project/{id}', 'ApiController@projectDetail');
	// user info
	Route::get('user/info', 'ApiController@userInfo');
	
	// 注册新用户
	Route::any('new/user', 'ApiController@newUser');
	// 退出登录
	Route::any('auth/logout', 'ApiController@authLogout');
	// 密码登录
	Route::any('auth/login/password', 'ApiController@authLoginPassword');
});