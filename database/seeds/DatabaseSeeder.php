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

        $this->command->info('Seeding Users');
        // factory(App\User::class, 50)->create();

        $this->command->info('Seeding Brand Types');
        // factory(App\BrandType::class, 50)->create();

        $this->command->info('Seeding Cities');
        // factory(App\City::class, 50)->create();

        $this->command->info('Seeding OilBrand');
        // factory(App\OilBrand::class, 50)->create();

        $this->command->info('Seeding Customers');
        // factory(App\Customer::class, 40)->create();

        $this->command->info('Seeding Visits');
        // factory(App\Visit::class, 40)->create();

        $this->command->info('Seeding Orders');
        // factory(App\Order::class, 40)->create();

        $this->command->info('Seeding Products');
        $this->call(ProductSeeder::class);

        $this->command->info('Seeding Order Products');
        // factory(App\OrderProduct::class, 50)->create();

        $this->command->info('Seeding Incomes');
        // factory(App\Income::class, 50)->create();
    }
}
