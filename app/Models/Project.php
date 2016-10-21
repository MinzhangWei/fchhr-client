<?php namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Project extends Model {
    protected $table = 'projects';

    public static function hotProjects()
    {
    	return self::where('state', 1)->get();
    }

    public static function simpleList()
    {
    	return self::where('state', 1)->lists('name', 'id');
    }
}
