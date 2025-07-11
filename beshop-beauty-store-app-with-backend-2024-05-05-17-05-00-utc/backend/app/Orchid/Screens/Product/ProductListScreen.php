<?php

namespace App\Orchid\Screens\Product;

use Orchid\Screen\Screen;

use App\Models\Product;
use Orchid\Screen\TD;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Actions\Link;
use Orchid\Support\Facades\Alert;
use Orchid\Screen\Actions\Button;
use Orchid\Support\Facades\Layout;
use Orchid\Screen\Actions\DropDown;
use Illuminate\Support\Facades\Storage;

class ProductListScreen extends Screen {
  public $products;

  public function query(): iterable {
    return [
      'products' => Product::filters()->defaultSort('updated_at', 'desc')->paginate(10)
    ];
  }

  public function name(): ?string {
    return 'Products';
  }

  public function commandBar(): iterable {
    return [
      Link::make('Create')
        ->icon('bs.plus-circle')
        ->route('platform.product.edit')
    ];
  }

  public function layout(): iterable {
    return [
      Layout::table('products', [

        TD::make('image', 'Image')
          ->cantHide()
          ->render(function (Product $product) {
            return '<img src="' . $product->image . '" width="50" height="61.58" style="object-fit: cover; object-position: center;">';
          }),

        TD::make('name', 'Name')
          ->sort()
          ->cantHide()
          ->filter(TD::FILTER_TEXT)
          ->render(function (Product $product) {
            return Link::make(Str::limit($product->name, 30))
              ->route('platform.product.edit', $product);
          }),

        TD::make('price', 'Price')
          ->sort()
          ->cantHide()
          ->align(TD::ALIGN_CENTER)
          ->filter(TD::FILTER_TEXT)
          ->render(function (Product $product) {
            return '$' . $product->price;
          }),

        TD::make('old_price', 'Old price')
          ->cantHide()
          ->sort()
          ->align(TD::ALIGN_CENTER)
          ->filter(Input::make())
          ->render(function (Product $product) {
            return $product->old_price ? '$' . "<strike>$product->old_price</strike>"  : '-';
          }),

        TD::make('updated_at', __('Last edit'))
          ->cantHide()
          ->sort()
          ->align(TD::ALIGN_CENTER)
          ->filter(Input::make())
          ->render(function (Product $product) {
            return $product->updated_at->format('M j, Y');
          }),

        TD::make('id', 'ID')
          ->cantHide()
          ->sort()
          ->align(TD::ALIGN_CENTER)
          ->filter(Input::make())
          ->render(function (Product $product) {
            return '#' . $product->id;
          }),

        TD::make(__('Actions'))
          ->cantHide()
          ->align(TD::ALIGN_CENTER)
          ->width('100px')
          ->render(fn (Product $product) => DropDown::make()
            ->icon('bs.three-dots-vertical')
            ->list([
              Link::make(__('Edit'))
                ->route('platform.product.edit', $product->id)
                ->icon('bs.pencil'),
              Button::make('Delete')
                ->icon('bs.trash3')
                ->confirm('Are you sure you want to delete this product ?')
                ->method('remove')
                ->parameters([
                  'product' => $product->id,
                ]),
            ])),
      ]),
    ];
  }

  public function remove(Product $product) {
    // Delete single image
    $image_path = $product->image;
    $image_path = str_replace(asset(''), '', $image_path);
    $images = json_decode($product->images);
    $imagesCount = count($images);
    File::exists($image_path) && File::delete($image_path);

    // Delete multiple images
    if ($imagesCount > 0) {
      foreach ($images as $image) {
        $image_from_array = str_replace(asset(''), '', $image);
        File::delete($image_from_array);
      }
    }

    $product->delete();
    Alert::info('You have successfully deleted the product.');
  }
}
