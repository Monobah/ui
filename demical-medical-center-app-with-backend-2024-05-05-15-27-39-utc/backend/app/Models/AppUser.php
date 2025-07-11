<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Orchid\Screen\AsSource;
use Orchid\Filters\Types\Like;
use Orchid\Filters\Filterable;

class AppUser extends Model {
  use HasFactory;
  use Filterable;
  use AsSource;

  protected $connection = 'mysql';
  protected $table = 'app_users';

  protected $fillable = [
    'id',
    'user_name',
    'user_email',
    'user_password',
    'user_location',
    'user_phone_number',
    'user_phone_verified',
  ];

  protected $allowedSorts = [
    'id',
    'user_name',
    'user_email',
    'user_password',
    'user_location',
    'user_phone_number',
    'user_phone_verified',
    'updated_at',
  ];

  protected $allowedFilters = [
    'id'                  => Like::class,
    'user_name'           => Like::class,
    'user_email'          => Like::class,
    'user_password'       => Like::class,
    'user_location'       => Like::class,
    'user_phone_number'   => Like::class,
    'user_phone_verified' => Like::class,
    'updated_at'          => Like::class,
  ];
}
