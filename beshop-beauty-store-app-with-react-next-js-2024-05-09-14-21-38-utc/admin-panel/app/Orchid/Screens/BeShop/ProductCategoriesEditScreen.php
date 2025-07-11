<?php

namespace App\Orchid\Screens\BeShop;

use Orchid\Screen\Screen;
use App\Models\Category;
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
use Orchid\Support\Facades\Alert;
use Orchid\Screen\Fields\CheckBox;
use Orchid\Screen\Fields\Cropper;
use Orchid\Screen\Fields\Picture;

class ProductCategoriesEditScreen extends Screen {

    public $category;

    public function query(Category $category): array {
        return ['category' => $category];
    }

    public function name(): ?string {
        return $this->category->exists ? 'Edit category' : 'Creating a new category';
    }

    public function commandBar(): iterable {
        return [
            Button::make('Create category')
                ->icon('pencil')
                ->method('createOrUpdate')
                ->canSee(!$this->category->exists),

            Button::make('Update')
                ->icon('note')
                ->method('createOrUpdate')
                ->canSee($this->category->exists),

            Button::make('Remove')
                ->icon('trash')
                ->method('remove')
                ->canSee($this->category->exists),
        ];
    }

    public function layout(): iterable {
        return [
            Layout::rows([
                Input::make('category.category_name')
                    ->title('Name')
                    ->horizontal()
                    ->required(),
            ])
        ];
    }

    public function createOrUpdate(Category $category, Request $request) {
        $category->fill($request->get('category'))->save();

        Alert::info('You have successfully created an category.');

        return redirect()->route('platform.product.category');
    }

    public function remove(Category $category) {
        $category->delete();

        Alert::info('You have successfully deleted the category.');

        return redirect()->route('platform.product.category');
    }

}
