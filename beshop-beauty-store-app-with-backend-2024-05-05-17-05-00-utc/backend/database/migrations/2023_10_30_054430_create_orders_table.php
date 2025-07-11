<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   */
  public function up(): void {
    Schema::create('orders', function (Blueprint $table) {
      $table->id();
      $table->timestamps();

      $table->json('products');
      $table->string('email');
      $table->string('address');
      $table->integer('user_id');
      $table->string('user_name');
      $table->string('phone_number');
      $table->string('payment_status');
      $table->string('total_price');
      $table->string('subtotal_price');
      $table->string('discount')->nullable();
      $table->string('delivery_price')->nullable();
      $table->string('order_status')->default('pending');
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void {
    Schema::dropIfExists('orders');
  }
};
