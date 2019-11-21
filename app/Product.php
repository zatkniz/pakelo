<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name', 'product_description_id', 'ixodes', 'product_category_id', 'product_use_id'
    ];

    protected $with = [
        'description', 'category', 'use', 'attributes'
    ];

    public function description()
    {
        return $this->belongsTo('App\ProductDescription', 'product_description_id');
    }

    public function category()
    {
        return $this->belongsTo('App\ProductCategory', 'product_category_id');
    }

    public function use()
    {
        return $this->belongsTo('App\ProductUse', 'product_use_id');
    }

    public function attributes()
    {
        return $this->hasMany('App\ProductAttribute', 'product_id');
    }
}
