<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->nullable();
            $table->string('display_name')->nullable();
            $table->string('afm')->nullable();
            $table->string('responsible')->nullable();
            $table->string('phone')->nullable();
            $table->string('phone_2')->nullable();
            $table->string('mobile')->nullable();
            $table->string('address')->nullable();
            $table->integer('city_id')->nullable();
            $table->string('fax')->nullable();
            $table->string('email')->nullable();
            $table->string('doy')->nullable();
            $table->string('job')->nullable();
            $table->integer('limit')->default(0);
            $table->integer('user_id')->nullable();
            $table->integer('vat_user_id')->nullable();
            $table->integer('seller_type_id')->nullable();
            $table->integer('brand_type_id')->nullable();
            $table->integer('oil_brand_id')->nullable();
            $table->float('percentage')->default(40);
            $table->boolean('active')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}
