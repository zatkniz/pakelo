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
        // $this->call(UsersTableSeeder::class);
        $this->call(UsersSeeder::class);
        $this->call(UserRolesSeeder::class);
        factory(App\City::class, 50)->create();
        factory(App\Customer::class, 300)->create();
        factory(App\User::class, 50)->create();
    }
}
