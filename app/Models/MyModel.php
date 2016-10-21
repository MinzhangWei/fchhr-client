<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MyModel extends Model {

	public static function assign($obj, $fields, $inputs) {
		foreach ($fields as $field) {
			$obj->$field = $inputs[$field];
		}
	}
}