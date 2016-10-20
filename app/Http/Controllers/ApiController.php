<?php namespace App\Http\Controllers;

use Auth;
use App\User as User;
use App\Models\Project as Project;

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

	public function hotProjects () {
		return $this->response(['projects' => Project::hotProjects()]);
	}

	public function myCustomers () {
		return $this->response(['customers' => Auth::user()->customers()]);
	}
}
