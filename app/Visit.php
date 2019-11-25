<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Visit extends Model
{
    protected $with = ['customer', 'user'];

    protected $fillable = [
        'customer_id',
        'user_id',
        'comments'
    ];

    public function customer()
    {
        return $this->belongsTo('\App\Customer');
    }

    public function user()
    {
        return $this->belongsTo('\App\User');
    }

    public function getCreatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d/m/Y H:i');
    }
}
