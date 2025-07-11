<?php

namespace App\Orchid\Screens\Category;

use Orchid\Screen\Screen;


use Illuminate\Http\Request;
use Orchid\Screen\Fields\Input;
use Illuminate\Validation\Rule;
use Orchid\Screen\Fields\Select;
use Orchid\Support\Facades\Alert;
use Orchid\Screen\Actions\Button;
use Orchid\Support\Facades\Layout;
use Illuminate\Support\Facades\Storage;

use App\Models\Category;
use App\Models\Doctor;
use App\Models\Speciality;

class CategoryEditScreen extends Screen {
  public $tags;
  public $category;
  public $specialities;

  public function query(Category $category): iterable {
    return [
      'category' => $category,
      'specialities' => Speciality::all(),
    ];
  }

  public function name(): ?string {
    return $this->category->exists ? 'Edit category' : 'Creating a new category';
  }

  public function commandBar(): iterable {
    return [
      Button::make('Create category')
        ->icon('pencil')
        ->method('create')
        ->canSee(!$this->category->exists),

      Button::make('Update')
        ->icon('note')
        ->method('update')
        ->canSee($this->category->exists),

      Button::make('Remove')
        ->icon('trash')
        ->method('remove')
        ->canSee($this->category->exists)
        ->confirm('Are you sure you want to delete this category ?'),
    ];
  }

  public function layout(): iterable {
    return [
      Layout::rows([
        Input::make('category.name')
          ->required(!$this->category->exists)
          ->placeholder('Category name')
          ->title(__('Name:')),

        Select::make('category.specialities')
          ->multiple()
          ->title(__('Specialities:'))
          ->disabled(!$this->specialities->count())
          ->required(!$this->category->exists)
          ->fromModel(Speciality::class, 'name', 'name')
          ->placeholder($this->specialities->count() ? 'Select specialities' : 'Please create specialities first in the "specialities" section.'),

        Input::make('category.image')
          ->required(!$this->category->exists)
          ->type('file')
          ->title(__('Image:')),
      ])
    ];
  }

  private function validateRequest(Request $request) {
    $rules = [
      'category.name' => [
        'required',
        'min:3',
        'max:225',
        Rule::unique('categories', 'name')->ignore($this->category->id),
      ],
      'category.specialities' => 'required|array|min:1',
    ];

    if (empty($this->category->image)) {
      $rules['category.image'] = 'required|image|mimes:jpeg,png,jpg|max:2048';
    }

    return $request->validate($rules);
  }

  private function deleteSingleImage($image) {
    $image = str_replace(asset('storage/'), '', $image);
    Storage::disk('public')->delete($image);
  }

  public function create(Request $request) {
    $categoryData = $this->validateRequest($request);

    $categoryData['name'] =  ucwords($request->input('category.name'));
    $categoryData['specialities'] = $request->input('category.specialities');

    if ($request->hasFile('category.image')) {
      $path = $request->file('category.image')->store('', 'public');
      if ($path !== false) {
        $categoryData['image'] = asset('storage/' . $path);
      }
    }

    $this->category->fill($categoryData)->save();
    Alert::info('You have successfully created a category.');
    return redirect()->route('platform.category.list');
  }

  public function update(Request $request) {
    $categoryData = $this->validateRequest($request);

    $categoryData['name'] =  ucwords($request->input('category.name'));
    $categoryData['specialities'] = $request->input('category.specialities');

    if ($request->hasFile('category.image')) {
      $this->deleteSingleImage($this->category->image);
      $path = $request->file('category.image')->store('', 'public');
      if ($path !== false) {
        $categoryData['image'] = asset('storage/' . $path);
      }
    }

    $this->category->fill($categoryData)->save();
    Alert::info('You have successfully updated the category.');
    return redirect()->route('platform.category.list');
  }

  public function remove(Category $category) {

    $category_used_in_doctors = Doctor::whereJsonContains('categories', $category->name)->get();

    if ($category_used_in_doctors->count()) {
      Alert::error('You cannot delete this category because it is used in Doctors.');
      return redirect()->route('platform.category.list');
    }

    $this->deleteSingleImage($this->category->image);

    $category->delete();
    Alert::info('You have successfully deleted the category.');
    return redirect()->route('platform.category.list');
  }
}
