<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Orchid\Screen\AsSource;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model {
    use HasFactory;
    use AsSource;

    protected $fillable = [
        'name',
        'email',
        'phone_number',
    ];
}
