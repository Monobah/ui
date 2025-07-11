<?php

namespace App\Orchid\Screens\BeShop;

use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Quill;
use Orchid\Screen\Fields\Relation;
use Orchid\Screen\Fields\TextArea;
use Orchid\Screen\Fields\Upload;
use Orchid\Screen\Fields\Select;
use Orchid\Screen\Fields\Group;
use Orchid\Support\Facades\Layout;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Screen;
use Orchid\Support\Facades\Alert;
use Orchid\Screen\Fields\CheckBox;
use Orchid\Screen\Fields\Cropper;

class ProductEditScreen extends Screen {

    public $product;

    public function query(Product $product): iterable {

        $product->load('attachment');

        return ['product' => $product];
    }

    public function name(): ?string {
        return $this->product->exists ? 'Edit product' : 'Creating a new product';
    }

    public function commandBar(): iterable {
        return [
            Button::make('Create product')->icon('pencil')->method('createOrUpdate')->canSee(!$this->product->exists),
            Button::make('Update')->icon('note')->method('createOrUpdate')->canSee($this->product->exists),
            Button::make('Remove')->icon('trash')->method('remove')->canSee($this->product->exists),
        ];
    }

    public function layout(): iterable {
        return [
            Layout::rows([

                Input::make('product.name')
                    ->title('Name')
                    ->horizontal()
                    ->required(),

                Input::make('product.price')
                    ->title('Price')
                    ->horizontal()
                    ->required(),

                Input::make('product.old_price')
                    ->title('Old Price')
                    ->horizontal(),

                Select::make('product.colors')
                    ->options([
                        'bridesmaid'   => 'Bridesmaid',
                        'misty_rose' => 'Misty Rose',
                        'melon' => 'Melon',
                        'mona_lisa' => 'Mona Lisa',
                    ])
                    ->multiple()
                    ->title('Colors')
                    ->horizontal(),

                Select::make('product.categories')
                    ->options([
                        'make_up'   => 'Make Up',
                        'spa' => 'SPA',
                        'perfume' => 'Perfume',
                        'hair_care' => 'Hair Care',
                    ])
                    ->multiple()
                    ->title('Categories')
                    ->horizontal()
                    ->required(),

                Select::make('product.promo_categories')
                    ->options([
                        'trending_products'   => 'Trending Products',
                        'new_arrivals' => 'New Arrivals',
                        'featured_products' => 'Featured Products',
                        'best_sellers' => 'Best sellers',
                        'sale' => 'Sale',
                    ])
                    ->multiple()
                    ->title('Promo Categories')
                    ->horizontal(),

                TextArea::make('product.description')
                    ->rows(5)
                    ->title('Short Description')
                    ->horizontal()
                    ->required(),

                Cropper::make('product.image')
                    ->title('Image')
                    ->width(480)
                    ->height(510)
                    ->horizontal()
                    ->required(),

            ])
        ];
    }

    public function createOrUpdate(Product $product, Request $request) {
        $product->fill($request->get('product'))->save();

        $product->attachment()->syncWithoutDetaching(
            $request->input('product.attachment', [])
        );

        Alert::info('You have successfully created an product.');

        return redirect()->route('platform.product.list');
    }

    public function remove(Product $product) {
        $product->delete();

        Alert::info('You have successfully deleted the product.');

        return redirect()->route('platform.product.list');
    }
}
