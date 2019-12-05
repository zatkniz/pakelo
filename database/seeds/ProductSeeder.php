<?php

use App\Product;
use App\ProductCategory;
use App\ProductDescription;
use App\ProductUse;
use Illuminate\Database\Seeder;
use SimpleXLSX as XLSX;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $input_file = dirname(__FILE__) . '/' . 'PAKELO ALL PRODUCT LIST.xlsx';
        if ($xlsx = XLSX::parse($input_file)) {

            //create Regions
            $this->command->info('Seeding products');
            foreach ($xlsx->rows() as $key => $value) {
                if ($value[0] != '' && $key > 0) {
                    $use = ProductUse::updateOrCreate(
                        [
                            'name' => $value[8]
                        ]
                    );

                    $category = ProductCategory::updateOrCreate(
                        [
                            'name' => $value[7]
                        ]
                    );

                    $description = ProductDescription::updateOrCreate(
                        [
                            'name' => $value[5]
                        ]
                    );

                    $product = Product::updateOrCreate(
                        [
                            'name' => $value[1]
                        ],
                        [
                            'product_description_id' => $description->id,
                            'ixodes' => $value[6],
                            'product_category_id' => $category->id,
                            'product_use_id' => $use->id,
                        ]
                    );

                    $product->attributes()->save(new App\ProductAttribute([
                        'code' => $value[0],
                        'lt_kg' => $value[2],
                        'price' => $value[3],
                        'price_per_kg' => $value[4],
                    ]));
                }
            }
        }
    }
}
