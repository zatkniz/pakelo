<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersSeeder::class);
        $this->call(UserRolesSeeder::class);
        $this->call(SellerTypeSeeder::class);
        factory(App\BrandType::class, 50)->create();
        factory(App\City::class, 50)->create();
        factory(App\Customer::class, 300)->create();
        factory(App\User::class, 50)->create();
    }
}
