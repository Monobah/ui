<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   */
  public function up(): void {
    Schema::create('app_users', function (Blueprint $table) {
      $table->id();
      $table->timestamps();

      $table->string('user_name');
      $table->string('user_email');
      $table->string('user_password');
      $table->string('user_location')->nullable();
      $table->string('user_phone_number')->nullable();
      $table->string('user_email_verified')->default('false');
      $table->string('user_phone_verified')->default('false');
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void {
    Schema::dropIfExists('app_users');
  }
};
