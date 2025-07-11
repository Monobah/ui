<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Orchid\Screen\AsSource;
use Orchid\Filters\Types\Like;
use Orchid\Filters\Filterable;

class Diagnostic extends Model {
  use AsSource;
  use HasFactory;
  use Filterable;

  protected $connection = 'mysql';
  protected $table = 'diagnostics';

  protected $hidden = ['created_at', 'updated_at'];

  protected $fillable = [
    'name',
    'image',
    'description',
    'specialities',
    'background_color'
  ];

  protected $casts = [
    'specialities' => 'array',
  ];

  protected $allowedSorts = [
    'id',
    'name',
    'description',
    'updated_at',
  ];

  protected $allowedFilters = [
    'id'             => Like::class,
    'name'           => Like::class,
    'description'    => Like::class,
  ];
}
