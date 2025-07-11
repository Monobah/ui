<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Orchid\Screen\AsSource;
use Orchid\Filters\Types\Like;
use Orchid\Filters\Filterable;

class Product extends Model {
  use AsSource;
  use Filterable;
  use HasFactory;

  protected $connection = 'mysql';
  protected $table = 'products';

  protected $fillable = [
    'name',
    'images',
    'description',
    'price',
    'sizes',
    'colors',
    'color',
    'quantity',
    'old_price',
    'tags',
    'categories',
    'promotions',

    // STATUS //
    'is_featured',
    'is_bestseller',
  ];

  protected $casts = [
    'images' => 'array',
    'colors' => 'array',
    'tags' => 'array',
    'categories' => 'array',
    'promotions' => 'array',

    // STATUS //
    'is_featured' => 'boolean',
    'is_bestseller' => 'boolean',
  ];

  protected $allowedSorts = [
    'id',
    'name',
    'price',
    'quantity',
    'old_price',
    'description',
  ];

  protected $allowedFilters = [
    'id'             => Like::class,
    'name'           => Like::class,
    'price'          => Like::class,
    'quantity'       => Like::class,
    'old_price'      => Like::class,
    'description'    => Like::class,
  ];
}
