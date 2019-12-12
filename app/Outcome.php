<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Outcome extends Model
{
    protected $fillable = [
        'user_id', 'outcome_type_id', 'amount', 'comments'
    ];

    public function type()
    {
        return $this->belongsTo('\App\OutcomeType', 'outcome_type_id');
    }

    public function user()
    {
        return $this->belongsTo('\App\User');
    }
}
