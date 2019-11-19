<?php

use Illuminate\Database\Seeder;

class SellerTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $boundaries = array(
            'Auto',
            'Moto'
        );

        foreach ($boundaries as $boundary) {
            $cropTypeObj = new \App\SellerType;
            $cropTypeObj->name = $boundary;
            $cropTypeObj->save();
        }
    }
}
