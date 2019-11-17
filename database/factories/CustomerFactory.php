<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Customer;
use Faker\Generator as Faker;

$factory->define(Customer::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'display_name' =>  $faker->name,
        'afm' => $faker->numberBetween($min = 100000, $max = 900000),
        'responsible' => $faker->name,
        'phone' => $faker->phoneNumber,
        'phone_2' => $faker->phoneNumber,
        'mobile' => $faker->phoneNumber,
        'address' => $faker->streetAddress,                       
        'city_id' => 1,
        'fax' => $faker->phoneNumber,
        'doy' => $faker->word,                                             
        'job' => $faker->company,             
        'limit' => $faker->numberBetween($min = 1000, $max = 9000),
        'user_id' => 1,
        'seller_type_id' => 1,
        'brand_type_id' => 1 ,
        'percentage' => $faker->numberBetween($min = 1, $max = 40),
        'active' => true
    ];
});
