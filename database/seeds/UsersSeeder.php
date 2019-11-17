<?php

use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::create([
            'name' => 'Στέλιος Κιτζίρης',
            'username' => 'stkitziris',
            'email' => 'stkitziris@gmail.com',
            'password' => 'test1234',
            'active' => true,
            'user_role_id' => 1,
        ]);
    }
}
