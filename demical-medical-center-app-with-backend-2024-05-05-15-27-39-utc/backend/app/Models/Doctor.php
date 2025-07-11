<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Orchid\Screen\AsSource;
use Orchid\Filters\Types\Like;
use Orchid\Filters\Filterable;

class Doctor extends Model {
  use AsSource;
  use Filterable;
  use HasFactory;

  protected $connection = 'mysql';
  protected $table = 'doctors';

  protected $hidden = ['created_at', 'updated_at'];

  protected $fillable = [
    'name',
    'price',
    'photo',
    'rating',
    'biography',
    'categories',
    'specialities',
    'certificates',
    'is_available',
    'start_time',
    'end_time',
    'promotion',
  ];

  protected $casts = [
    'categories'    => 'array',
    'certificates'  => 'array',
    'is_available'  => 'boolean',
    'specialities'  => 'array',
  ];

  protected $allowedSorts = [
    'id',
    'name',
    'price',
    'speciality',
  ];

  protected $allowedFilters = [
    'id'             => Like::class,
    'name'           => Like::class,
    'price'          => Like::class,
    'speciality'     => Like::class,
    'is_available'   => Like::class,
  ];
}
