<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Orchid\Screen\AsSource;
use Orchid\Filters\Types\Like;
use Orchid\Filters\Filterable;

class Promotion extends Model {
  use HasFactory;

  use AsSource;
  use HasFactory;
  use Filterable;

  protected $connection = 'mysql';
  protected $table = 'promotions';

  protected $hidden = ['created_at', 'updated_at'];

  protected $fillable = [
    'name',
  ];

  protected $allowedSorts = [
    'id',
    'name',
    'updated_at',
  ];

  protected $allowedFilters = [
    'id'         =>  Like::class,
    'name'       => Like::class,
    'updated_at' => Like::class,
  ];
}
