<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

use App\Bear as Bear;
use App\Picnic as Picnic;

class CreateBearsPicnicsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bears_picnics', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('bear_id');
            $table->integer('picnic_id');

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
        Schema::drop('bears_picnics');
    }
}
