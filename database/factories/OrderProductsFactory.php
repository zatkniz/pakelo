<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Order;
use App\OrderProduct;
use App\Product;
use Faker\Generator as Faker;

$factory->define(OrderProduct::class, function (Faker $faker) {
    return [
        'order_id' => Order::all()->random(1)[0]->id,
        'product_id' => Product::all()->random(1)[0]->id,
        'quantity' => $faker->numberBetween($min = 0, $max = 10),
        'price' => $faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 1000),
    ];
});
