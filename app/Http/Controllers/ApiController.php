<?php namespace App\Http\Controllers;

use Auth;
use Request;
use App\User as User;
use App\Models\Project as Project;
use App\Models\Customer as Customer;

class ApiController extends Controller {

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		// $this->middleware('guest');
	}

	public function projectsHot () {
		return $this->response(['projects' => Project::hotProjects()]);
	}
	public function projectsAll () {
		return $this->response(['projects' => Project::hotProjects()]);
	}

	public function myCustomers () {
		return $this->response(['customers' => Auth::user()->customers()]);
	}

	public function newCustomer () {
		$res = Customer::newOne(array_map('trim', Request::all()));
		return $this->response([], $res['status'], $res['message']);
	}

	public function projectDetail($id) {
		return $this->response(Project::find($id), 'SUCCESS');
	}

	public function userInfo() {
		return $this->response(User::info(), 'SUCCESS');
	}

	public function newUser () {
		// $user = User::find(1);
		// Auth::login($user);

		$res = User::register(array_map('trim', Request::all()));
		return $this->response([], $res['status'], $res['message']);
	}

	public function authLogout () {
		Auth::logout();
		return $this->response();
	}

	public function authLoginPassword () {
		$res = User::loginPassword(array_map('trim', Request::all()));
		return $this->response([], $res['status'], $res['message']);
	}
}
