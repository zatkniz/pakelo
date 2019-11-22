<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SellerType extends Model
{
    public $timestamps = false;

    protected $withCount = [
        'items'
    ];

    protected $fillable = [
        'name'
    ];

    public function items() {
        return $this->hasMany('\App\Customer');
    }
}
