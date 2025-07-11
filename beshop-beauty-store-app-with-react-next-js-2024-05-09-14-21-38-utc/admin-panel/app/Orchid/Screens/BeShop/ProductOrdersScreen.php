<?php

namespace App\Orchid\Screens\BeShop;

use Orchid\Screen\Screen;
use Orchid\Support\Facades\Layout;
use Orchid\Screen\TD;
use App\Models\Order;
use Orchid\Screen\Actions\Link;

class ProductOrdersScreen extends Screen {
    public function query(): iterable {
        return ['order' => Order::paginate(20)];
    }

    public function name(): ?string {
        return 'Orders';
    }

    public function commandBar(): iterable {
        return [];
    }

    public function layout(): iterable {
        return [
            Layout::table('order', [

                TD::make('order_id', 'Order ID')
                    ->render(function (Order $order) {
                        return $order->order_id;
                    }),

                TD::make('customer_name', 'Customer Name')
                    ->render(function (Order $order) {
                        return $order->customer_name;
                    }),

                TD::make('order_status', 'Order Status')
                    ->render(function (Order $order) {
                        return $order->order_status;
                    }),

                TD::make('payment_status', 'Payment Status')
                    ->render(function (Order $order) {
                        return $order->payment_status;
                    }),

                TD::make('total_price', 'Total Price')
                    ->render(function (Order $order) {
                        return '$ ' . $order->total_price;
                    }),

                TD::make('order_date', 'Order Date')
                    ->render(function (Order $order) {
                        return $order->order_date;
                    }),
            ])
        ];
    }
}
