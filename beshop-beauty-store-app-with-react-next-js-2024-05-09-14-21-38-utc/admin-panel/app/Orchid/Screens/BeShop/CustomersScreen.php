<?php

namespace App\Orchid\Screens\BeShop;

use Orchid\Screen\Screen;
use Orchid\Support\Facades\Layout;
use Orchid\Screen\TD;
use App\Models\Customer;

class CustomersScreen extends Screen {
    public function query(): iterable {
        return ['customers' => Customer::paginate(10)];
    }

    public function name(): ?string {
        return 'Customers';
    }

    public function commandBar(): iterable {
        return [];
    }

    public function layout(): iterable {
        return [
            Layout::table('customers', [
                TD::make('name', 'Name'),
                TD::make('email', 'Email'),
                TD::make('phone_number', 'Phone Number'),
            ])
        ];
    }
}
