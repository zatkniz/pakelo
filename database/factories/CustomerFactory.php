<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\BrandType;
use App\Customer;
use App\City;
use App\SellerType;
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
        'city_id' => City::all()->random(1)[0]->id,
        'fax' => $faker->phoneNumber,
        'doy' => $faker->word,
        'job' => $faker->company,
        'limit' => $faker->numberBetween($min = 1000, $max = 9000),
        'user_id' => 1,
        'seller_type_id' => SellerType::all()->random(1)[0]->id,
        'brand_type_id' => BrandType::all()->random(1)[0]->id,
        'percentage' => $faker->numberBetween($min = 1, $max = 40),
        'active' => true
    ];
});
