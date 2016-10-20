<?php namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesCommands;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;

abstract class Controller extends BaseController {

	use DispatchesCommands, ValidatesRequests;

	public function response($data = [], $status = 200, $msg = '')
	{
		return response()->json([
			'status'=> $status,
			'msg'   => $msg,
			'data'  => $data
		]);
	}
}
