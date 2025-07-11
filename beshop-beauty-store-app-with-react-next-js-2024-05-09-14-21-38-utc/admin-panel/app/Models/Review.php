<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Orchid\Screen\AsSource;

class Review extends Model {
    use HasFactory;
    use AsSource;

    protected $fillable = [
        'customer_name',
        'product_name',
        'comment',
        'rating',
    ];
}
