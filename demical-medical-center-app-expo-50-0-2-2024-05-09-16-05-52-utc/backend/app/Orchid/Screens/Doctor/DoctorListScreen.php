<?php

namespace App\Orchid\Screens\Doctor;

use Orchid\Screen\TD;
use App\Models\Doctor;
use Orchid\Screen\Screen;
use Illuminate\Support\Str;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Actions\Link;
use Orchid\Support\Facades\Alert;
use Orchid\Screen\Actions\Button;
use Orchid\Support\Facades\Layout;
use Orchid\Screen\Actions\DropDown;
use Illuminate\Support\Facades\Storage;
use Orchid\Screen\Fields\CheckBox;
use Orchid\Screen\Fields\TextArea;
// file
use Orchid\Screen\Fields\Upload;
use Illuminate\Support\Facades\File;

class DoctorListScreen extends Screen {
  public $doctors;


  public function mount() {
    $this->doctors = Doctor::all();
    foreach ($this->doctors as $doctor) {
      $doctor->certificates = json_encode($doctor->certificates);
    }
  }

  public function query(): iterable {
    return [
      'doctors' => Doctor::filters()->defaultSort('updated_at', 'desc')->paginate(10),
    ];
  }

  public function name(): ?string {
    return 'Doctors';
  }

  public function commandBar(): iterable {
    return [
      Link::make('Create')
        ->icon('bs.plus-circle')
        ->route('platform.doctor.edit')
    ];
  }

  public function layout(): iterable {
    return [
      Layout::table('doctors', [

        TD::make('image', 'Image')
          ->cantHide()
          ->render(function (Doctor $doctor) {
            return '<img src="' . $doctor->photo . '" width="50" height="62.5" style="object-fit: cover; object-position: center; border-radius: 7%;">';
          }),

        TD::make('name', 'Name')
          ->sort()
          ->cantHide()
          ->render(function (Doctor $doctor) {
            return Link::make(Str::limit($doctor->name, 30))
              ->route('platform.doctor.edit', $doctor);
          }),

        TD::make('price', 'Price')
          ->sort()
          ->cantHide()
          ->filter(TD::FILTER_TEXT)
          ->render(function (Doctor $doctor) {
            return '$' . $doctor->price;
          }),

        TD::make('updated_at', __('Last edit'))
          ->cantHide()
          ->sort()
          ->filter(Input::make())
          ->render(function (Doctor $doctor) {
            return $doctor->updated_at->format('M j, Y');
          }),

        TD::make('id', 'ID')
          ->cantHide()
          ->sort()
          ->align(TD::ALIGN_CENTER)
          ->filter(Input::make())
          ->render(function (Doctor $doctor) {
            return '#' . $doctor->id;
          }),

        TD::make('is_available', 'Available')
          ->cantHide()
          ->sort()
          ->align(TD::ALIGN_CENTER)
          ->render(function (Doctor $doctor) {
            return $doctor->is_available ? '<i class="text-success">●</i>' : '<i class="text-danger">●</i>';
          }),

        TD::make(__('Actions'))
          ->cantHide()
          ->align(TD::ALIGN_CENTER)
          ->width('100px')
          ->render(fn (Doctor $doctor) => DropDown::make()
            ->icon('bs.three-dots-vertical')
            ->list([
              Link::make(__('Edit'))
                ->route('platform.doctor.edit', $doctor->id)
                ->icon('bs.pencil'),
              Button::make('Delete')
                ->icon('bs.trash3')
                ->confirm(
                  'If you delete this doctor, all related data will be deleted. 
                  We recommend that you disable the doctor instead of deleting it.
                  Are you sure you want to delete this doctor ?'
                )
                ->method('remove')
                ->parameters([
                  'doctor' => $doctor->id,
                ]),
            ])),
      ]),
    ];
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

  public function remove(Doctor $doctor) {
    $this->deleteSingleImage($doctor->photo);
    $this->deleteMultipleImages(json_decode($doctor->certificates));

    $doctor->delete();
    Alert::info('You have successfully deleted the doctor.');
  }
}
