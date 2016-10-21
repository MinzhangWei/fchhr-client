<?php namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

use Crypt;
use Validator;
use Auth;

use App\Models\Customer as Customer;
use App\Models\Project as Project;

class User extends Model implements AuthenticatableContract, CanResetPasswordContract {

	use Authenticatable, CanResetPassword;

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['name', 'email', 'password'];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = ['password', 'remember_token'];

	public function customers () {
		$projects = Project::simpleList();
		$customers = $this->hasMany('App\Models\Customer', 'referrer_id')->orderBy('id', 'desc')->get();

		foreach ($customers as $customer) {
			$customer->projects;
		}

		return $customers;
	}

	public function referrer () {
		return User::find($this->referrer_id);
	}

	public function partners () {
		return $this->hasMany('App\User', 'referrer_id');
	}

	public static function info() {
		$info = Auth::user();
		$info->referrer = $info->referrer();

		return $info;
	}

	public static function register ($inputs)
	{
		// register rules
		$rules = [
			'phone'         	=> ['required', 'regex:/^13\d{9}$|^14\d{9}$|^15\d{9}$|^17\d{9}$|^18\d{9}$/'],
			'password'  		=> ['required','between:6,32'],
			'invitation_code' 	=> ['min:12']
		];
		
		// validate input
		$v = Validator::make($inputs, $rules);
		$messages = '';
		if ($v->fails()) {
			$messages = $v->messages();

			return ['status' => 'INVALID_ARGUMENT', 'message' => $messages];
		}

		// exist check
		$existUser = self::where('phone', $inputs['phone'])->count();
		if($existUser > 0) {
			return ['status' => 'EXIST_USER', 'message' => $messages];
		}

		// get invitation user
		$referrerId = 0;
		if (isset($inputs['invitation_code'])) {
			$referrerUser 	= self::where('invitation_code', $inputs['invitation_code'])->first();
			$referrerId 	= $invitationUser ? $invitationUser->id : 0;
		}

		$user 				= new User;
		$user->phone 		= $inputs['phone'];
		$user->password 	= $inputs['password'];
		$user->referrer_id 	= $referrerId;
		$user->save();

		return ['status' => 'SUCCESS', 'message' => $messages];
	}

	public static function loginPassword ($inputs) {
		$rules = [
			'phone'         	=> ['required', 'regex:/^13\d{9}$|^14\d{9}$|^15\d{9}$|^17\d{9}$|^18\d{9}$/'],
			'password'  		=> ['required','between:6,32']
		];

		// validate input
		$v = Validator::make($inputs, $rules);
		$messages = '';
		if ($v->fails()) {
			$messages = $v->messages();

			return ['status' => 'INVALID_ARGUMENT', 'message' => $messages];
		}

		$user = self::where('phone', $inputs['phone'])
				->where('password', $inputs['password'])
				->first();

		if (!$user) {
			return ['status' => 'INVALID_LOGIN', 'message' => ''];
		} else {
			Auth::login($user);
			return ['status' => 'SUCCESS', 'message' => ''];
		}
	}
}
