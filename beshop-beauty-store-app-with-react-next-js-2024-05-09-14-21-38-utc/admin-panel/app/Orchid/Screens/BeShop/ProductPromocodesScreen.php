<?php

namespace App\Orchid\Screens\BeShop;

use Orchid\Screen\Screen;
use Orchid\Support\Facades\Layout;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\TD;
use Orchid\Screen\Actions\Link;
use App\Models\Promocode;
use App\Orchid\Layouts\PromocodeListLayout;
use Orchid\Screen\Repository;
use Illuminate\Support\Str;
use Orchid\Screen\Actions\DropDown;
use Orchid\Screen\Actions\Button;

class ProductPromocodesScreen extends Screen {
    public function query(): iterable {
        return ['promocodes' => Promocode::paginate(10)];
    }

    public function name(): ?string {
        return 'Promocodes';
    }

    public function commandBar(): iterable {
        return [Link::make('Create new')->icon('pencil')->route('platform.product.promocode.edit')];
    }

    public function layout(): iterable {
        return [
            Layout::table('promocodes', [

                TD::make('name', 'Name')
                    ->render(function (Promocode $promocode) {
                        return $promocode->name;
                    }),

                TD::make('code', 'Code')
                    ->render(function (Promocode $promocode) {
                        return $promocode->code . ' (' . $promocode->discount . ')';
                    }),

                TD::make('discount', 'Discount')
                    ->render(function (Promocode $promocode) {
                        return $promocode->discount . '%';
                    }),

                TD::make('valid_till', 'Valid Till')
                    ->render(function (Promocode $promocode) {
                        return $promocode->valid_till;
                    }),

                TD::make(__('Actions'))
                    ->align(TD::ALIGN_CENTER)
                    ->width('100px')
                    ->render(function (Promocode $promocode) {
                        return DropDown::make()
                            ->icon('options-vertical')
                            ->list([
                                Link::make(__('Edit'))
                                    ->route('platform.product.promocode.edit', $promocode->id)
                                    ->icon('pencil'),
                            ]);
                    }),
            ])
        ];
    }
}
