<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderProduct extends Model
{
    protected $with = ['product'];

    public function product()
    {
        return $this->belongsTo('App\ProductAttribute', 'product_id');
    }
}
