<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Order extends Model
{
    protected $with = ['customer', 'user',  'products', 'products.product.product'];
    protected $withCount = ['products'];

    protected $fillable = [
        'customer_id',
        'user_id',
        'comments',
        'is_offer',
        'created_at'
    ];

    protected $appends = [
        'summary',
    ];

    public function customer()
    {
        return $this->belongsTo('\App\Customer');
    }

    public function user()
    {
        return $this->belongsTo('\App\User');
    }

    // public function getCreatedAtAttribute($date)
    // {
    //     return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d/m/Y H:i');
    // }

    public function products()
    {
        return $this->hasMany('\App\OrderProduct');
    }

    public function getSummaryAttribute()
    {
        return number_format((float) $this->products->sum('price'), 2, '.', '');
    }
}
