<?php

namespace App\Orchid\Screens\Diagnostic;

use Orchid\Screen\Screen;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Select;
use Orchid\Support\Facades\Alert;
use Orchid\Screen\Actions\Button;
use Orchid\Support\Facades\Layout;
use Orchid\Screen\Fields\TextArea;
use Illuminate\Support\Facades\Storage;


use App\Models\Speciality;
use App\Models\Diagnostic;

class DiagnosticEditScreen extends Screen {
  public $diagnostic;
  public $specialities;

  public function query(Diagnostic $diagnostic): iterable {
    return [
      'diagnostic' => $diagnostic,
      'specialities' => Speciality::all(),
    ];
  }

  public function name(): ?string {
    return $this->diagnostic->exists ? 'Edit diagnostic' : 'Creating a new diagnostic';
  }

  public function commandBar(): iterable {
    return [
      Button::make('Create')
        ->icon('pencil')
        ->method('create')
        ->canSee(!$this->diagnostic->exists),

      Button::make('Update')
        ->icon('note')
        ->method('update')
        ->canSee($this->diagnostic->exists),

      Button::make('Remove')
        ->icon('trash')
        ->method('remove')
        ->canSee($this->diagnostic->exists)
        ->confirm('Are you sure you want to delete this diagnostic ?'),
    ];
  }

  public function layout(): iterable {
    return [
      Layout::rows([
        Input::make('diagnostic.name')
          ->title('Name')
          ->placeholder('Diagnostic name')
          ->required(),

        TextArea::make('diagnostic.description')
          ->rows(5)
          ->title(__('Description:'))
          ->required(!$this->diagnostic->exists)
          ->placeholder('Enter short description'),

        Select::make('diagnostic.specialities')
          ->multiple()
          ->title(__('Specialities:'))
          ->disabled(!$this->specialities->count())
          ->required(!$this->diagnostic->exists)
          ->fromModel(Speciality::class, 'name', 'name')
          ->empty($this->specialities->count() ? 'Select specialities' : 'Please create specialities first in the "Specialities" section.')
          ->placeholder($this->specialities->count() ? 'Select specialities' : 'Please create specialities first in the "specialities" section.'),

        Input::make('diagnostic.image')
          ->required(!$this->diagnostic->exists)
          ->type('file')
          ->title(__('Image:')),

        Input::make('diagnostic.background_color')
          ->type('color')
          ->title('Background color')
          ->required(!$this->diagnostic->exists)
          ->value('#563d7c'),

      ])
    ];
  }

  private function validateRequest(Request $request) {

    $rules = [
      'diagnostic.background_color' => 'required|string',
      'diagnostic.specialities' => 'required|array|min:1',
      'diagnostic.name' => 'required|min:3|max:225|string',
      'diagnostic.description' => 'required|min:3|max:225|string',
    ];

    if (empty($this->diagnostic->image)) {
      $rules['diagnostic.image'] = 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048';
    }

    if (!empty($this->diagnostic->image)) {
      $rules['diagnostic.image'] = 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048';
    }

    return $request->validate($rules);
  }

  private function deleteSingleImage($image) {
    $image = str_replace(asset('storage/'), '', $image);
    Storage::disk('public')->delete($image);
  }

  public function create(Request $request) {
    $diagnosticData = $this->validateRequest($request);

    $diagnosticData['name'] =  ucwords($request->input('diagnostic.name'));
    $diagnosticData['description'] = $request->input('diagnostic.description');
    $diagnosticData['specialities'] = $request->input('diagnostic.specialities');
    $diagnosticData['background_color'] = $request->input('diagnostic.background_color');

    if ($request->hasFile('diagnostic.image')) {
      $path = $request->file('diagnostic.image')->store('', 'public');
      if ($path !== false) {
        $diagnosticData['image'] = asset('storage/' . $path);
      }
    }

    $this->diagnostic->fill($diagnosticData)->save();
    Alert::info('You have successfully created a diagnostic.');
    return redirect()->route('platform.diagnostic.list');
  }

  public function update(Request $request) {

    $diagnosticData = $this->validateRequest($request);

    $diagnosticData['name'] =  ucwords($request->input('diagnostic.name'));
    $diagnosticData['description'] = $request->input('diagnostic.description');
    $diagnosticData['specialities'] = $request->input('diagnostic.specialities');
    $diagnosticData['background_color'] = $request->input('diagnostic.background_color');

    if ($request->hasFile('diagnostic.image')) {
      $this->deleteSingleImage($this->diagnostic->image);
      $path = $request->file('diagnostic.image')->store('', 'public');
      if ($path !== false) {
        $diagnosticData['image'] = asset('storage/' . $path);
      }
    }

    $this->diagnostic->fill($diagnosticData)->save();
    Alert::info('You have successfully updated a diagnostic.');
    return redirect()->route('platform.diagnostic.list');
  }

  public function remove() {
    $this->deleteSingleImage($this->diagnostic->image);

    $this->diagnostic->delete();
    Alert::info('You have successfully deleted a diagnostic.');
    return redirect()->route('platform.diagnostic.list');
  }
}
