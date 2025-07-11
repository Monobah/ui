<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Orchid\Screen\AsSource;
use Orchid\Filters\Filterable;
use Orchid\Filters\Types\Like;

class Color extends Model {
  use AsSource;
  use HasFactory;
  use Filterable;

  protected $connection = 'mysql';
  protected $table = 'colors';

  protected $fillable = [
    'name',
    'code',
  ];

  protected $allowedSorts = [
    'id',
    'name',
    'code',
    'updated_at',
  ];

  protected $allowedFilters = [
    'id'         => Like::class,
    'name'       => Like::class,
    'code'       => Like::class,
    'updated_at' => Like::class,
  ];
}
