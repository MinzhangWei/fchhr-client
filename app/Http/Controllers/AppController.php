<?php namespace App\Http\Controllers;
use View;

class AppController extends Controller {

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		// $this->middleware('guest');
	}

	/**
	 * Show the application welcome screen to the user.
	 *
	 * @return Response
	 */
	public function index()
	{
		// make blade to support including .html file
		View::addExtension('html', 'php');

		// register templates
		$templates = [
			'authentication-id',
			'commission',
			'customer',
			'explore',
			'invitation',
			'inviter',
			'modal-project',
			'profile',
			'project',
			'recommend',
			'rules',
			'setting',
			'tabs',
			'updates'
		];
		return view('app', ['templates' => $templates]);
	}

}
