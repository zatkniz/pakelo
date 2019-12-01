<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderProduct extends Model
{
    protected $with = ['product'];

    protected $fillable = [
        'order_id',
        'price',
        'product_id',
        'quantity'
    ];

    public function product()
    {
        return $this->belongsTo('App\ProductAttribute', 'product_id');
    }
}
