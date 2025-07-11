<?php

namespace App\Orchid\Screens\Color;

use Orchid\Screen\Screen;

use App\Models\Color;
use Illuminate\Http\Request;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Actions\Button;
use Orchid\Support\Facades\Alert;
use Orchid\Support\Facades\Layout;

class ColorEditScreen extends Screen {
  public $color;

  public function query(Color $color): iterable {
    return [
      'color' => $color,
    ];
  }

  public function name(): ?string {
    return $this->color->exists ? 'Edit color' : 'Creating a new color';
  }

  public function commandBar(): iterable {
    return [
      Button::make('Create color')
        ->icon('pencil')
        ->method('create')
        ->canSee(!$this->color->exists),

      Button::make('Update')
        ->icon('note')
        ->method('update')
        ->canSee($this->color->exists),

      Button::make('Remove')
        ->icon('trash')
        ->method('remove')
        ->canSee($this->color->exists)
        ->confirm('Are you sure you want to delete this color ?'),
    ];
  }

  public function layout(): iterable {
    return [
      Layout::rows([
        Input::make('color.name')
          ->title(__('Name'))
          ->placeholder(__('Color name')),

        Input::make('color.code')
          ->type('color')
          ->title(__('Code'))
          ->value('#563d7c'),
      ])
    ];
  }

  public function create(Request $request) {

    $request->validate([
      'color.name' => 'required|unique:colors,name',
      'color.code' => 'required|unique:colors,code',
    ]);

    $color = [
      'name' => ucwords($request->input('color.name')),
      'code' => $request->input('color.code'),
    ];

    $this->color->fill($color)->save();
    Alert::info('You have successfully created a color.');
    return redirect()->route('platform.color.list');
  }

  public function update(Request $request) {

    $request->validate([
      'color.name' => 'required|min:3|max:225|unique:colors,name,' . $this->color->id,
      'color.code' => 'required|unique:colors,code,' . $this->color->id,
    ]);

    $color = [
      'name' => ucwords($request->input('color.name')),
      'code' => $request->input('color.code'),
    ];

    $this->color->fill($color)->save();
    Alert::info('You have successfully updated the color.');
    return redirect()->route('platform.color.list');
  }

  public function remove(Color $color) {
    $color->delete();
    Alert::info('You have successfully deleted the color.');
    return redirect()->route('platform.color.list');
  }
}
