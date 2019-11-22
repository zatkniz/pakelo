<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductDescription extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'name'
    ];

    protected $withCount = [
        'items'
    ];

    public function items() {
        return $this->hasMany('\App\Product');
    }
}
