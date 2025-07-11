<?php

namespace App\Orchid\Screens\Doctor;

use Orchid\Screen\Screen;

use App\Models\Doctor;
use App\Models\Category;
use App\Models\Promotion;
use App\Models\Speciality;
use Illuminate\Http\Request;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Select;
use Orchid\Screen\Actions\Button;
use Orchid\Support\Facades\Alert;
use Orchid\Support\Facades\Layout;
use Orchid\Screen\Fields\Switcher;
use Orchid\Screen\Fields\TextArea;
use Orchid\Screen\Fields\DateTimer;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class DoctorEditScreen extends Screen {
  public $doctor;
  public $categories;
  public $specialities;
  public $promotions;

  public function query(Doctor $doctor): iterable {
    return [
      'doctor' => $doctor,
      'categories' => Category::all(),
      'specialities' => Speciality::all(),
      'promotions' => Promotion::all(),
    ];
  }

  public function name(): ?string {
    return $this->doctor->exists ? 'Edit doctor' : 'Creating a new doctor';
  }

  public function commandBar(): iterable {
    return [
      Button::make('Create doctor')
        ->icon('pencil')
        ->method('create')
        ->canSee(!$this->doctor->exists),

      Button::make('Update')
        ->icon('note')
        ->method('update')
        ->canSee($this->doctor->exists),

      Button::make('Remove')
        ->icon('trash')
        ->method('remove')
        ->canSee($this->doctor->exists)
        ->confirm(
          'If you delete this doctor, all related data will be deleted. 
          We recommend that you disable the doctor instead of deleting it.
          Are you sure you want to delete this doctor ?'
        )
    ];
  }

  public function layout(): iterable {

    return [
      Layout::rows([
        Input::make('doctor.name')
          ->title(__('Name:'))
          ->required(!$this->doctor->exists)
          ->placeholder('Enter doctor name'),

        TextArea::make('doctor.biography')
          ->rows(5)
          ->title(__('Biography:'))
          ->required(!$this->doctor->exists)
          ->placeholder('Enter short biography'),

        Input::make('doctor.price')
          ->title('Price (USD):')
          ->required(!$this->doctor->exists)
          ->mask([
            'alias' => 'currency',
            'groupSeparator' => '',
            'digits' => 2,
            'autoUnmask' => true,
            'removeMaskOnSubmit' => true,
          ])
          ->placeholder('Enter price'),

        Select::make('doctor.specialities')
          ->multiple()
          ->title(__('Specialities:'))
          ->required(!$this->doctor->exists)
          ->placeholder('Select specialities')
          ->disabled(!$this->specialities->count())
          ->fromModel(Speciality::class, 'name', 'name')
          ->empty($this->specialities->count() ? 'Select specialities' : 'Please create specialities first in the "Specialities" section.')
          ->placeholder($this->specialities->count() ? 'Select specialities' : 'Please create specialities first in the "Specialities" section.'),

        Select::make('doctor.categories')
          ->multiple()
          ->title(__('Categories:'))
          ->required(!$this->doctor->exists)
          ->disabled(!$this->categories->count())
          ->fromModel(Category::class, 'name', 'name')
          ->placeholder($this->categories->count() ? 'Select categories' : 'Please create categories first in the "Categories" section.'),

        Select::make('doctor.promotion')
          ->title(__('Promotion:'))
          ->placeholder('Select promotion')
          ->disabled(!$this->promotions->count())
          ->fromModel(Promotion::class, 'name', 'name')
          ->empty($this->promotions->count() ? 'Select promotion' : 'Please create promotions first in the "promotions" section.')
          ->placeholder($this->promotions->count() ? 'Select promotion' : 'Please create promotions first in the "promotions" section.'),

        DateTimer::make('doctor.start_time')
          ->required(!$this->doctor->exists)
          ->title('Start time:')
          ->noCalendar()
          ->format('h:i K'),

        DateTimer::make('doctor.end_time')
          ->required(!$this->doctor->exists)
          ->title('End time:')
          ->noCalendar()
          ->format('h:i K'),

        Input::make('doctor.photo')
          ->required(!$this->doctor->exists)
          ->type('file')
          ->title(__('Photo:')),

        Input::make('doctor.certificates')
          ->type('file')
          ->multiple()
          ->title(__('Certificates:')),

      ]),

      Layout::rows([
        Switcher::make('doctor.is_available')
          ->value(1)
          ->sendTrueOrFalse()
          ->placeholder('Available & Unavailable'),
      ])
    ];
  }

  private function validateRequest(Request $request) {
    $rules = [
      'doctor.name' => 'required|string',
      'doctor.biography' => 'required|string',
      'doctor.price' => 'required|numeric',
      'doctor.categories' => 'required',
      'doctor.specialities' => 'required|array',
      'doctor.photo' => 'sometimes|image',
      'doctor.is_available' => 'required|boolean',
      'doctor.certificates' => 'sometimes|array',
      'doctor.start_time' => 'required',
      'doctor.end_time' => 'required',
    ];

    if (empty($this->doctor->photo)) {
      $rules['doctor.photo'] = 'required|image';
    }

    return $request->validate($rules);
  }

  private function deleteSingleImage($image) {
    $image = str_replace(asset('storage/'), '', $image);
    Storage::disk('public')->delete($image);
  }

  private function deleteMultipleImages($images) {
    foreach ($images as $image) {
      $image = str_replace(asset('storage/'), '', $image);
      Storage::disk('public')->delete($image);
    }
  }

  public function create(Request $request) {
    $doctorData = $this->validateRequest($request);

    $doctorData['name'] = ucwords($request->input('doctor.name'));
    $doctorData['categories'] = $request->input('doctor.categories');
    $doctorData['specialities'] = $request->input('doctor.specialities');
    $doctorData['biography'] = $request->input('doctor.biography');
    $doctorData['price'] = $request->input('doctor.price');
    $doctorData['promotion'] = $request->input('doctor.promotion');
    $doctorData['is_available'] = $request->input('doctor.is_available');
    $doctorData['start_time'] = $request->input('doctor.start_time');
    $doctorData['end_time'] = $request->input('doctor.end_time');

    if ($request->hasFile('doctor.photo')) {
      $path = $request->file('doctor.photo')->store('', 'public');
      if ($path !== false) {
        $doctorData['photo'] = asset('storage/' . $path);
      }
    }

    if ($request->hasFile('doctor.certificates')) {
      $certificates = [];
      foreach ($request->file('doctor.certificates') as $certificate) {
        $path = $certificate->store('', 'public');
        if ($path !== false) {
          $certificates[] = asset('storage/' . $path);
        }
      }
      $doctorData['certificates'] = json_encode($certificates);
    }

    $this->doctor->fill($doctorData)->save();

    Alert::info('You have successfully created a doctor.');
    return redirect()->route('platform.doctor.list');
  }

  public function update(Request $request) {

    $doctorData = $this->validateRequest($request);

    $doctorData['name'] = ucwords($request->input('doctor.name'));
    $doctorData['categories'] = $request->input('doctor.categories');
    $doctorData['specialities'] = $request->input('doctor.specialities');
    $doctorData['biography'] = $request->input('doctor.biography');
    $doctorData['price'] = $request->input('doctor.price');
    $doctorData['promotion'] = $request->input('doctor.promotion');
    $doctorData['is_available'] = $request->input('doctor.is_available');
    $doctorData['start_time'] = $request->input('doctor.start_time');
    $doctorData['end_time'] = $request->input('doctor.end_time');

    if ($request->hasFile('doctor.photo')) {
      $this->deleteSingleImage($this->doctor->photo);
      $path = $request->file('doctor.photo')->store('', 'public');
      if ($path !== false) {
        $doctorData['photo'] = asset('storage/' . $path);
      }
    }

    if ($request->hasFile('doctor.certificates')) {
      $this->deleteMultipleImages(json_decode($this->doctor->certificates));
      $certificates = [];
      foreach ($request->file('doctor.certificates') as $certificate) {
        $path = $certificate->store('', 'public');
        if ($path !== false) {
          $certificates[] = asset('storage/' . $path);
        }
      }
      $doctorData['certificates'] = json_encode($certificates);
    }

    $this->doctor->fill($doctorData)->save();
    Alert::info('You have successfully updated the doctor.');
    return redirect()->route('platform.doctor.list');
  }

  public function remove(Doctor $doctor) {
    $this->deleteSingleImage($this->doctor->photo);
    $this->deleteMultipleImages(json_decode($this->doctor->certificates));

    $doctor->delete();
    Alert::info('You have successfully deleted the doctor.');
    return redirect()->route('platform.doctor.list');
  }
}
