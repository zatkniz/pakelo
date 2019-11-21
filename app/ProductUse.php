<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductUse extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'name'
    ];
}
