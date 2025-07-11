<?php

namespace App\Orchid\Screens\BeShop;

use Orchid\Screen\Actions\Link;
use Orchid\Screen\Screen;
use App\Models\Product;
use Orchid\Support\Facades\Layout;
use Orchid\Screen\TD;
use Illuminate\Support\Str;
use Orchid\Screen\Actions\DropDown;
use Orchid\Screen\Actions\Button;

class ProductListScreen extends Screen {

    public $target = 'products';

    public function query(): array {
        return ['products' => Product::paginate(10)];
    }

    public function name(): ?string {
        return 'All Products';
    }

    public function commandBar(): array {
        return [
            Link::make('Create new')
                ->icon('plus')
                ->route('platform.product.edit')
            ];
    }

    public function layout(): array {
        return [
            Layout::table('products', [
                TD::make('image', 'Image')
                ->render(function (Product $product) {
                    return '<img src="' . $product->image . '" width="70" height="74">';
                }),

                TD::make('name', 'Name')
                    ->render(function (Product $product) {
                        return $product->name;
                    }),

                TD::make('description', 'Description')
                    ->width('450')
                    ->render(function (Product $product) {
                        return Str::limit($product->description, 200);
                    }),

                TD::make('price', 'Price')
                    ->render(function (Product $product) {
                        return '$ ' . $product->price;
                    }),

                TD::make('old_price', 'Old Price')
                    ->render(function (Product $product) {
                        return $product->old_price ? '$ ' . "<strike>'$product->old_price'</strike>"  : '-';
                    }),

                TD::make(__('Actions'))
                    ->align(TD::ALIGN_CENTER)
                    ->width('100px')
                    ->render(function (Product $product) {
                        return DropDown::make()
                            ->icon('options-vertical')
                            ->list([
                                Link::make(__('Edit'))
                                    ->route('platform.product.edit', $product->id)
                                    ->icon('pencil'),

                                // Button::make(__('Delete'))
                                //     ->icon('trash')
                                //     ->confirm(__('Are you sure you want to delete the user?'))
                                //     ->method('remove', [
                                //         'id' => $product->id,
                                //     ])
                            ]);
                    }),

            ])
        ];
    }
}
