<?php namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use App\Models\Project;

class Customer extends Model {
    protected $table = 'customers';

    public function projects () {
    	return $this->belongsToMany('App\Models\Project', 'project_customer', 'customer_id', 'project_id');
    }
}
