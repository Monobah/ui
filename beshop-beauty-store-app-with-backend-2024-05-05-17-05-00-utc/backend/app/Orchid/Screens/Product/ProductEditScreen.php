<?php

namespace App\Orchid\Screens\Product;

use Orchid\Screen\Screen;

use Illuminate\Http\Request;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Select;
use Orchid\Screen\Actions\Button;
use Orchid\Support\Facades\Alert;
use Orchid\Support\Facades\Layout;
use Orchid\Screen\Fields\TextArea;
use Orchid\Screen\Fields\CheckBox;
use Illuminate\Support\Facades\Storage;

use App\Models\Tag;
use App\Models\Color;
use App\Models\Product;
use App\Models\Category;
use App\Models\Promotion;

class ProductEditScreen extends Screen {
  public $tags;
  public $colors;
  public $product;
  public $categories;
  public $promotions;

  public function query(Product $product): iterable {
    return [
      'product' => $product,
      'tags' => Tag::all(),
      'colors' => Color::all(),
      'categories' => Category::all(),
      'promotions' => Promotion::all(),
    ];
  }

  public function name(): ?string {
    return $this->product->exists ? 'Edit product' : 'Creating a new product';
  }

  public function commandBar(): iterable {
    return [
      Button::make('Create product')
        ->icon('pencil')
        ->method('create')
        ->canSee(!$this->product->exists),

      Button::make('Update')
        ->icon('note')
        ->method('update')
        ->canSee($this->product->exists),

      Button::make('Remove')
        ->icon('trash')
        ->method('remove')
        ->canSee($this->product->exists)
        ->confirm('Are you sure you want to delete this product ?'),
    ];
  }

  public function layout(): iterable {
    return [
      Layout::rows([
        Input::make('product.name')
          ->title(__('Name:'))
          ->required(!$this->product->exists)
          ->placeholder('Enter product name'),

        TextArea::make('product.description')
          ->rows(5)
          ->title(__('Description:'))
          ->required(!$this->product->exists)
          ->placeholder('Enter short description'),

        Input::make('product.price')
          ->title('Price:')
          ->required(!$this->product->exists)
          ->mask([
            'alias' => 'currency',
            'groupSeparator' => '',
          ])
          ->placeholder('Enter price'),

        Input::make('product.old_price')
          ->title(__('Old price:'))
          ->mask([
            'alias' => 'currency',
            'groupSeparator' => '',
          ])
          ->placeholder('Enter old price'),

        Select::make('product.colors')
          ->multiple()
          ->title(__('Colors:'))
          ->disabled(!$this->colors->count())
          ->fromModel(Color::class, 'name', 'name')
          ->placeholder($this->colors->count() ? 'Select colors' : 'Please create colors first in the "Colors" section.'),

        Select::make('product.categories')
          ->multiple()
          ->title(__('Categories:'))
          ->required(!$this->product->exists)
          ->disabled(!$this->categories->count())
          ->fromModel(Category::class, 'name', 'name')
          ->placeholder($this->categories->count() ? 'Select categories' : 'Please create categories first in the "Categories" section.'),

        Select::make('product.tags')
          ->multiple()
          ->title(__('Tags:'))
          ->disabled(!$this->tags->count())
          ->required(!$this->product->exists)
          ->fromModel(Tag::class, 'name', 'name')
          ->placeholder($this->tags->count() ? 'Select tags' : 'Please create tags first in the "Tags" section.'),

        Input::make('product.image')
          ->required(!$this->product->exists)
          ->type('file')
          ->title(__('Image:')),

        Input::make('product.images')
          ->required(!$this->product->exists)
          ->type('file')
          ->title(__('Images:'))
          ->multiple()
      ]),
      Layout::rows([
        CheckBox::make('product.is_featured')
          ->value(0)
          ->sendTrueOrFalse()
          ->placeholder(__('Featured')),

        CheckBox::make('product.is_bestseller')
          ->value(0)
          ->sendTrueOrFalse()
          ->placeholder(__('Bestseller')),

      ])
    ];
  }

  public function create(Request $request) {

    $request->validate([
      'product.name' => 'required|min:3|max:225|unique:products,name',
      'product.image' => 'image|mimes:jpeg,png,jpg|max:2048',
      'product.images' => 'required|array|min:1|max:10',
      'product.description' => 'required|min:3|max:400',
      'product.price' => 'required|min:3|max:225',
      'prodcut.old_price' => 'min:3|max:225',
      'product.colors' => 'array|min:1|max:10',
      'product.categories' => 'array|min:1|max:10',
      'product.tags' => 'required|array|min:1|max:10',
      'product.promotions' => 'array|min:1|max:10',
    ]);

    $product = $this->product->fill($request->get('product'));

    $image = asset('storage/' . $request->file('product.image')->store('', 'public'));
    $this->product->image = $image;

    $images = [];
    foreach ($request->file('product.images') as $image) {
      $images[] = asset('storage/' . $image->store('', 'public'));
      $this->product->images = json_encode($images);
    }

    $product->save();

    Alert::info('You have successfully created a product.');
    return redirect()->route('platform.product.list');
  }

  public function update(Request $request) {

    $request->validate([
      'product.name' => 'required|min:3|max:225|unique:products,name,' . $this->product->id,
      'product.image' => 'image|mimes:jpeg,png,jpg|max:2048' . $this->product->id,
      'product.description' => 'required|min:3|max:225' . $this->product->id,
      'product.price' => 'required|min:3|max:225' . $this->product->id,
      'prodcut.old_price' => 'min:3|max:225' . $this->product->id,
      'product.colors' => 'array|min:1|max:10' . $this->product->id,
      'product.categories' => 'array|min:1|max:10' . $this->product->id,
      'product.tags' => 'array|min:1|max:10' . $this->product->id,
      'product.promotions' => 'array|min:1|max:10' . $this->product->id,
    ]);

    $product = $request->get('product');

    if ($request->hasFile('product.image')) {
      $image = str_replace(asset('storage/'), '', $this->product->image);
      Storage::disk('public')->delete($image);
      $product['image'] = asset('storage/' . $request->file('product.image')->store('', 'public'));
    }

    $this->product->colors = $request->input('product.colors');

    $this->product->fill($product)->save();
    Alert::info('You have successfully updated the product.');
    return redirect()->route('platform.product.list');
  }

  public function remove(Product $product) {
    $image = str_replace(asset('storage/'), '', $product->image);
    Storage::disk('public')->delete($image);

    $product->delete();
    Alert::info('You have successfully deleted the product.');
    return redirect()->route('platform.product.list');
  }
}
