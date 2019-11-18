<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $fillable = [
        'name',
        'display_name',
        'afm',
        'responsible',
        'phone',
        'phone_2',
        'mobile',
        'address',
        'city_id',
        'fax',
        'email',
        'doy',
        'job',
        'limit',
        'user_id',
        'seller_type_id',
        'brand_type_id',
        'percentage',
        'active',
    ];

    protected $with = [
        'user',
        'city'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function city()
    {
        return $this->belongsTo('App\City');
    }
}
