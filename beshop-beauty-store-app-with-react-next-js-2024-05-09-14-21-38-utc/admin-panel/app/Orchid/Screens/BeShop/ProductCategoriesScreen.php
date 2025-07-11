<?php

namespace App\Orchid\Screens\BeShop;

use Orchid\Screen\Screen;
use Orchid\Screen\TD;
use Orchid\Support\Facades\Layout;
use App\Models\Category;
use Orchid\Screen\Actions\Link;
use Orchid\Screen\Actions\DropDown;
use Orchid\Screen\Actions\Button;

class ProductCategoriesScreen extends Screen {

    public function query(): array {
        return ['categories' => Category::paginate(10)];
    }

    public function name(): ?string {
        return 'Categories';
    }

    public function commandBar(): array {
        return [Link::make('Create new')->icon('pencil')->route('platform.product.category.edit')];
    }

    public function layout(): array {
        return [
            Layout::table('categories', [

                TD::make('category', 'Name')
                    ->render(function (Category $category) {
                        return Link::make($category->category_name)
                            ->route('platform.product.category.edit', $category);
                    }),

                TD::make(__('Actions'))
                    ->align(TD::ALIGN_CENTER)
                    ->width('100px')
                    ->render(function (Category $category) {
                        return DropDown::make()
                            ->icon('options-vertical')
                            ->list([

                                Link::make(__('Edit'))
                                    ->route('platform.product.category.edit', $category->id)
                                    ->icon('pencil'),
                            ]);
                    }),



            ])
        ];
    }

}
