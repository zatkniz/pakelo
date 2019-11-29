<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Order;
use App\Customer;
use App\User;
use Faker\Generator as Faker;

$factory->define(Order::class, function (Faker $faker) {
    return [
        'user_id' => User::all()->random(1)[0]->id,
        'customer_id' => Customer::all()->random(1)[0]->id,
        'comments' => $faker->text($maxNbChars = 200),
        'is_offer' => $faker->numberBetween($min = 0, $max = 1),
    ];
});
