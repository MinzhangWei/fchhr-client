<?php namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesCommands;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;

use Config;

abstract class Controller extends BaseController {

	use DispatchesCommands, ValidatesRequests;

	public function response($data = [], $status = 'SUCCESS', $msg = '')
	{
		$statusObj = Config::get('status.' . $status);

		return response()->json([
			'status'	=> $statusObj[0],
			'msg'		=> $statusObj[1],
			'msg_cont' 	=> $msg,
			'data'  	=> $data
		]);
	}
}
