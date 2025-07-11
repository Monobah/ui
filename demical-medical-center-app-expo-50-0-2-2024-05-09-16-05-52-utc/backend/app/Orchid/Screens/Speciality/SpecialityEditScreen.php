<?php

namespace App\Orchid\Screens\Speciality;

use App\Models\Doctor;
use App\Models\Category;
use Orchid\Screen\Screen;
use App\Models\Speciality;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Actions\Button;
use Orchid\Support\Facades\Alert;
use Orchid\Support\Facades\Layout;

class SpecialityEditScreen extends Screen {
  public $speciality;
  public $doctors;

  public function query(Speciality $speciality): iterable {
    return [
      'speciality' => $speciality,
      'doctors' => Doctor::all(),
    ];
  }

  public function name(): ?string {
    return $this->speciality->exists ? 'Edit speciality' : 'Creating a new speciality';
  }

  public function commandBar(): iterable {
    return [
      Button::make('Create')
        ->icon('pencil')
        ->method('create')
        ->canSee(!$this->speciality->exists),

      Button::make('Update')
        ->icon('note')
        ->method('update')
        ->canSee($this->speciality->exists),

      Button::make('Remove')
        ->icon('trash')
        ->method('remove')
        ->canSee($this->speciality->exists)
        ->confirm('Are you sure you want to delete this speciality ?'),
    ];
  }

  public function layout(): iterable {
    return [
      Layout::rows([
        Input::make('speciality.name')
          ->required(!$this->speciality->exists)
          ->placeholder('speciality name')
          ->title(__('Name:')),
      ])
    ];
  }

  private function validateRequest(Request $request) {
    $rules = [
      'speciality.name' => ['required', 'min:3', 'max:225', Rule::unique('specialities', 'name')->ignore($this->speciality->id)],
    ];

    return $request->validate($rules);
  }

  public function create(Request $request) {
    $specialityData = $this->validateRequest($request);

    $specialityData['name'] =  ucwords($request->input('speciality.name'));

    $this->speciality->fill($specialityData)->save();
    Alert::info('You have successfully created a speciality.');
    return redirect()->route('platform.speciality.list');
  }

  public function update(Request $request) {
    $specialityData = $this->validateRequest($request);

    $specialityData['name'] =  ucwords($request->input('speciality.name'));

    $this->speciality->fill($specialityData)->save();
    Alert::info('You have successfully updated the speciality.');
    return redirect()->route('platform.speciality.list');
  }

  public function remove(Speciality $speciality) {

    $speciality_used_in_doctors = Doctor::whereJsonContains('specialities', $speciality->name)->get();
    $speciality_used_in_categories = Category::whereJsonContains('specialities', $speciality->name)->get();

    if ($speciality_used_in_doctors->count() || $speciality_used_in_categories->count()) {
      Alert::error('You cannot delete this speciality because it is used in doctors or categories.');
      return redirect()->route('platform.speciality.list');
    }

    $speciality->delete();
    Alert::info('You have successfully deleted the speciality.');
    return redirect()->route('platform.speciality.list');
  }
}
