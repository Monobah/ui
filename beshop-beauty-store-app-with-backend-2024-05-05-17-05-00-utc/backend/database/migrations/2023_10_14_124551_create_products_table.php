<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   */
  public function up(): void {
    Schema::create('products', function (Blueprint $table) {
      $table->id();
      $table->timestamps();

      $table->json('tags');
      $table->string('name');
      $table->string('image');
      $table->json('categories');
      $table->text('description');
      $table->decimal('price', 10, 2);
      $table->json('images')->nullable();
      $table->json('colors')->nullable();
      $table->integer('rating')->default(5);
      $table->integer('quantity')->nullable();
      $table->decimal('old_price', 10, 2)->nullable();

      // STATUS //
      $table->boolean('is_featured')->default(false);
      $table->boolean('is_bestseller')->default(false);
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void {
    Schema::dropIfExists('products');
  }
};
