<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Income extends Model
{

    protected $fillable = [
        'user_id', 'customer_id', 'amount', 'comments'
    ];

    public function customer()
    {
        return $this->belongsTo('\App\Customer');
    }

    public function user()
    {
        return $this->belongsTo('\App\User');
    }
}
