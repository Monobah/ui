<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Orchid\Screen\AsSource;
use Orchid\Filters\Types\Like;
use Orchid\Filters\Filterable;

class Banner extends Model {
  use HasFactory;
  use Filterable;
  use AsSource;

  protected $connection = 'mysql';
  protected $table = 'banners';

  protected $fillable = [
    'id',
    'image',
    'title',
    'promotion',
    'button_text',
  ];

  protected $allowedSorts = [
    'id',
    'title',
    'promotion',
    'button_text',
    'updated_at',
  ];

  protected $allowedFilters = [
    'id'                => Like::class,
    'title'             => Like::class,
    'promotion'         => Like::class,
    'button_text'       => Like::class,
    'updated_at'        => Like::class,
  ];
}
