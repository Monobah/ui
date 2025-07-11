<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Orchid\Screen\AsSource;

class Promocode extends Model {
    use HasFactory;
    use AsSource;

    protected $fillable = [
        'name',
        'code',
        'discount',
        'valid_till',
    ];
}
