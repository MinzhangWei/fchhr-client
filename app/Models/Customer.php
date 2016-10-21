<?php namespace App\Models;

use Validator;
use Auth;
use DB;
use Illuminate\Database\Eloquent\Model;
use App\Models\Project;

class Customer extends MyModel {
	protected $table = 'customers';

	public function projects () {
		return $this->belongsToMany('App\Models\Project', 'project_customer', 'customer_id', 'project_id');
	}

	public static function newOne($inputs) {
		// define rules
		$rules = [
			'name'          => ['required', 'between:2,10'],
			'phone'         => ['required', 'regex:/^13\d{9}$|^14\d{9}$|^15\d{9}$|^17\d{9}$|^18\d{9}$/'],
			'gender'        => ['required', 'in:1,2'],
			'introduction'  => ['max:128'],
			'projects'      => ['required', 'array']
		];

		// format project data
		$inputs['projects'] = isset($inputs['projects']) ? explode(',', $inputs['projects']) : [];

		// validate input
		$v = Validator::make($inputs, $rules);
		if ($v->fails()) {
			$messages = $v->messages();

			return ['status' => 'INVALID_ARGUMENT', 'message' => $messages];
		}

		// check customer&project uniqure
		$customer = Customer::where('phone', $inputs['phone'])->first();
		if (!$customer) {
			$customer = new Customer;
			$customer->referrer_id = Auth::id();
			self::assign($customer, ['name', 'phone', 'gender'], $inputs);
			$customer->save();
		}

		// check user intention project
		$messages = [];
		$insers = [];
		$projects = Project::whereIn('id', $inputs['projects'])->where('state',1)->get();
		foreach ($projects as $project) {
			$existIntentionProject = DB::table('project_customer')
				->where('customer_id', $customer->id)
				->where('project_id', $project->id)->first();

			if ($existIntentionProject) {
				$messages[] = $project->name;

				continue;
			}

			$insers[] = [
				'customer_id' 	=> $customer->id,
				'project_id' 	=> $project->id,
				'referrer_id' 	=> Auth::id(),
				'introduction' 	=> isset($inputs['introduction']) ? $inputs['introduction'] : ''
			];
		}
		DB::table('project_customer')->insert($insers);

		return ['status' => 'SUCCESS', 'message' => $messages];
	}
}
