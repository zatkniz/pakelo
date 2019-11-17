<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use Notifiable;


    protected $appends = ['is_admin', 'active_state'];

    protected $with = ['userRole'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'username', 'active', 'user_role_id', 'phone', 'phone_2'
    ];

    public function getIsAdminAttribute()
    {
        return $this->attributes['user_role_id'] == 1;
    }

    public function getActiveStateAttribute()
    {
        return $this->attributes['active'] == 1 ? 'Ενεργός' : 'Ανενεργός';
    }

    public function userRole() {
        return $this->belongsTo('\App\UserRole');
    }

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value);
    }
}
