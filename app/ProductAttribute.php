<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductAttribute extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'code', 'lt_kg', 'price', 'price_per_kg', 'product_id'
    ];

    public function product()
    {
        return $this->belongsTo('\App\Product');
    }
}
