<?php

declare(strict_types=1);

namespace App\Orchid;

use Orchid\Platform\Dashboard;
use Orchid\Platform\ItemPermission;
use Orchid\Platform\OrchidServiceProvider;
use Orchid\Screen\Actions\Menu;
use Orchid\Support\Color;

class PlatformProvider extends OrchidServiceProvider {

    public function boot(Dashboard $dashboard): void {
        parent::boot($dashboard);

        // ...
    }

    public function registerMainMenu(): array {
        return [
            Menu::make('Product List')
                ->icon('bag')
                ->route('platform.product.list'),

            Menu::make('Categories')
                ->icon('grid')
                ->route('platform.product.category'),

            Menu::make('Orders')
                ->icon('basket')
                ->route('platform.product.orders')
                ->badge(function () {
                    return 6;
                }),

            Menu::make('Promocodes')
                ->icon('barcode')
                ->route('platform.product.promocodes'),

            Menu::make('Customers')
                ->icon('user')
                ->route('platform.product.customers'),

            Menu::make('Reviews')
                ->icon('star')
                ->route('platform.product.reviews'),
        ];
    }

    public function registerProfileMenu(): array {
        return [
            Menu::make('Profile')
                ->route('platform.profile')
                ->icon('user'),
        ];
    }

    public function registerPermissions(): array {
        return [
            ItemPermission::group(__('System'))
                ->addPermission('platform.systems.roles', __('Roles'))
                ->addPermission('platform.systems.users', __('Users')),
        ];
    }
}
