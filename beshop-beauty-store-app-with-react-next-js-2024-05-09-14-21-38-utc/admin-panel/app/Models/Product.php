<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Orchid\Screen\AsSource;
use Orchid\Attachment\Attachable;
use Orchid\Attachment\Models\Attachment;

class Product extends Model {
    use AsSource;
    use HasFactory;
    use Attachable;

    protected $casts = [
        'colors' => 'json',
        'categories' => 'json',
        'promo_categories' => 'json',
    ];

    protected $fillable = [
        'name',
        'price',
        'old_price',
        'description',
        'colors',
        'categories',
        'promo_categories',
        'image',
    ];
}
