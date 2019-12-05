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
        'vat_user_id',
        'seller_type_id',
        'brand_type_id',
        'oil_brand_id',
        'percentage',
        'active',
    ];

    protected $with = [
        'user',
        'city',
        'sellerType',
        'BrandType',
        'oilBrand',
        'incomes'
    ];

    protected $appends = [
        'incomes_sum',
        'orders_sum',
        'balance',
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function city()
    {
        return $this->belongsTo('App\City');
    }

    public function sellerType()
    {
        return $this->belongsTo('App\SellerType');
    }

    public function BrandType()
    {
        return $this->belongsTo('App\BrandType');
    }

    public function oilBrand()
    {
        return $this->belongsTo('App\OilBrand');
    }

    public function incomes()
    {
        return $this->hasMany('App\Income');
    }

    public function orders()
    {
        return $this->hasMany('\App\Order');
    }

    public function getIncomesSumAttribute()
    {
        return (float) number_format((float) $this->incomes->sum('amount'), 2, '.', '');
    }

    public function getOrdersSumAttribute()
    {
        return (float) number_format((float) $this->orders->sum('price'), 2, '.', '');
    }

    public function getBalanceAttribute()
    {
        return $this->getOrdersSumAttribute() - $this->getIncomesSumAttribute();
    }
}
