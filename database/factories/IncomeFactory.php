<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Customer;
use App\Income;
use App\User;
use Faker\Generator as Faker;

$factory->define(Income::class, function (Faker $faker) {
    return [
        'user_id' => User::all()->random(1)[0]->id,
        'customer_id' => Customer::all()->random(1)[0]->id,
        'amount' => $faker->randomFloat($nbMaxDecimals = 2, $min = 10, $max = 1000),
    ];
});
