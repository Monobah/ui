<?php

namespace App\Orchid\Screens\Promocode;

use Orchid\Screen\Screen;

use App\Models\Promocode;
use Illuminate\Http\Request;
use Orchid\Screen\Fields\Input;
use Orchid\Support\Facades\Alert;
use Orchid\Screen\Actions\Button;
use Orchid\Support\Facades\Layout;
use Orchid\Screen\Fields\DateTimer;

class PromocodeEditScreen extends Screen {
  public $promocode;

  public function query(Promocode $promocode): iterable {
    return [
      'promocode' => $promocode
    ];
  }

  public function name(): ?string {
    return $this->promocode->exists ? 'Edit promocode' : 'Creating a new promocode';
  }

  public function commandBar(): iterable {
    return [
      Button::make('Create promocode')
        ->icon('pencil')
        ->method('create')
        ->canSee(!$this->promocode->exists),

      Button::make('Update')
        ->icon('note')
        ->method('update')
        ->canSee($this->promocode->exists),

      Button::make('Remove')
        ->icon('trash')
        ->method('remove')
        ->canSee($this->promocode->exists)
        ->confirm('Are you sure you want to delete this promocode ?'),
    ];
  }

  public function layout(): iterable {
    return [
      Layout::rows([
        Input::make('promocode.code')
          ->type('text')
          ->title('Code')
          ->required(!$this->promocode->exists)
          ->placeholder('Enter code'),

        Input::make('promocode.discount')
          ->type('number')
          ->title('Discount')
          ->required(!$this->promocode->exists)
          ->placeholder('Enter discount in %'),

        DateTimer::make('promocode.expires_at')
          ->title('Expires at')
          ->required(!$this->promocode->exists)
          ->format('Y-m-d'),
      ])
    ];
  }

  public function create(Request $request) {
    $request->validate([
      'promocode.code' => 'required|min:3|max:225|unique:promocodes,code',
      'promocode.discount' => 'required|numeric|min:1|max:100',
      'promocode.expires_at' => 'required|date',
    ]);

    $promocode = [
      'code' => ucwords($request->input('promocode.code')),
      'discount' => $request->input('promocode.discount'),
      'expires_at' => $request->input('promocode.expires_at'),
    ];

    $this->promocode->fill($promocode)->save();
    Alert::info('You have successfully created a promocode.');
    return redirect()->route('platform.promocode.list');
  }
}
