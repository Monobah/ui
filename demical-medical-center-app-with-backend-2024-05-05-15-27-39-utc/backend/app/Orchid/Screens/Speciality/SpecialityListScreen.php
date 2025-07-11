<?php

namespace App\Orchid\Screens\Speciality;

use App\Models\Doctor;
use Orchid\Screen\TD;
use App\Models\Category;
use Orchid\Screen\Screen;
use App\Models\Speciality;
use Illuminate\Support\Str;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Actions\Link;
use Orchid\Support\Facades\Alert;
use Orchid\Screen\Actions\Button;
use Orchid\Support\Facades\Layout;
use Orchid\Screen\Actions\DropDown;


class SpecialityListScreen extends Screen {

  public function query(): iterable {
    return [
      'specialities' => Speciality::filters()->defaultSort('updated_at', 'desc')->paginate(10)
    ];
  }

  public function name(): ?string {
    return 'Specialities';
  }

  public function commandBar(): iterable {
    return [
      Link::make('Create')
        ->icon('bs.plus-circle')
        ->route('platform.speciality.edit')
    ];
  }

  public function layout(): iterable {
    return [
      Layout::table('specialities', [
        TD::make('name', 'Name')
          ->sort()
          ->cantHide()
          ->filter(Input::make())
          ->render(function (Speciality $speciality) {
            return Link::make(Str::ucfirst($speciality->name))->route('platform.speciality.edit', $speciality->id);
          }),

        TD::make('updated_at', __('Last edit'))
          ->sort()
          ->cantHide()
          ->filter(Input::make())
          ->render(function (Speciality $speciality) {
            return $speciality->updated_at->format('M j, Y');
          }),

        TD::make('id', 'ID')
          ->cantHide()
          ->sort()
          ->filter(Input::make())
          ->align(TD::ALIGN_CENTER)
          ->render(function (Speciality $speciality) {
            return '#' . $speciality->id;
          }),

        TD::make(__('Actions'))
          ->cantHide()
          ->align(TD::ALIGN_CENTER)
          ->width('100px')
          ->render(fn (Speciality $speciality) => DropDown::make()
            ->icon('bs.three-dots-vertical')
            ->list([
              Link::make(__('Edit'))
                ->route('platform.speciality.edit', $speciality->id)
                ->icon('bs.pencil'),
              Button::make('Delete')
                ->icon('bs.trash3')
                ->confirm('Are you sure you want to delete this speciality ?')
                ->method('remove')
                ->parameters([
                  'speciality' => $speciality->id,
                ]),
            ])),
      ])
    ];
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
