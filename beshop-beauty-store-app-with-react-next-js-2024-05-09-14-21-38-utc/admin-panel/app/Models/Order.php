<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Orchid\Screen\AsSource;

class Order extends Model {
    use HasFactory;
    use AsSource;

    protected $fillable = [
        'id',
        'order_id',
        'customer_name',
        'total_price',
        'order_status',
        'payment_status',
        'order_date',
    ];

}
