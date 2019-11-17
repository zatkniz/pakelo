<?php

use Illuminate\Database\Seeder;

class UserRolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $boundaries = array(
            'Διαχειριστής',
            'Πωλητής'
        );

        foreach ($boundaries as $boundary) {
            $cropTypeObj = new \App\UserRole;
            $cropTypeObj->name = $boundary;
            $cropTypeObj->save();
        }

    }
}
