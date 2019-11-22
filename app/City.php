<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class City extends Model
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
