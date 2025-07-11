<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   */
  public function up(): void {
    Schema::create('doctors', function (Blueprint $table) {
      $table->id();
      $table->timestamps();

      $table->string('name');
      $table->string('photo');
      $table->json('categories');
      $table->string('biography');
      $table->json('specialities');
      $table->decimal('price', 8, 2);
      $table->integer('rating')->default(5);
      $table->string('promotion')->nullable();
      $table->json('certificates')->nullable();
      $table->boolean('is_available')->default(true);

      $table->string('start_time')->nullable();
      $table->string('end_time')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void {
    Schema::dropIfExists('doctors');
  }
};
