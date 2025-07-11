<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Orchid\Screen\AsSource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Orchid\Attachment\Attachable;

class Category extends Model {
    use AsSource, HasFactory;

    protected $fillable = [
        'category_name',
    ];
}
