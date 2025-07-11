<?php

namespace App\Orchid\Screens\Promotion;

use Orchid\Screen\Screen;

use App\Models\Promotion;
use Illuminate\Http\Request;
use Orchid\Screen\Fields\Input;
use Orchid\Support\Facades\Alert;
use Orchid\Screen\Actions\Button;
use Orchid\Support\Facades\Layout;

class PromotionEditScreen extends Screen {
  public $promotion;

  public function query(Promotion $promotion): iterable {
    return [
      'promotion' => $promotion
    ];
  }

  public function name(): ?string {
    return $this->promotion->exists ? 'Edit promotion' : 'Creating a new promotion';
  }

  public function commandBar(): iterable {
    return [
      Button::make('Create promotion')
        ->icon('pencil')
        ->method('create')
        ->canSee(!$this->promotion->exists),

      Button::make('Update')
        ->icon('note')
        ->method('update')
        ->canSee($this->promotion->exists),

      Button::make('Remove')
        ->icon('trash')
        ->method('remove')
        ->canSee($this->promotion->exists)
        ->confirm('Are you sure you want to delete this promotion ?'),
    ];
  }

  public function layout(): iterable {
    return [
      Layout::rows([
        Input::make('promotion.name')
          ->required(!$this->promotion->exists)
          ->placeholder('Promotion name')
          ->title(__('Name:')),
      ])
    ];
  }

  public function create(Request $request) {
    $request->validate([
      'promotion.name' => 'required|min:3|max:225|unique:promotions,name',
    ]);

    $promotion = [
      'name' => ucwords($request->input('promotion.name')),
    ];

    $this->promotion->fill($promotion)->save();
    Alert::info('You have successfully created a promotion.');
    return redirect()->route('platform.promotion.list');
  }

  public function update(Request $request) {
    $request->validate([
      'promotion.name' => 'required|min:3|max:225|unique:promotions,name,' . $this->promotion->id,
    ]);

    $promotion = [
      'name' => ucwords($request->input('promotion.name')),
    ];

    $this->promotion->fill($promotion)->save();
    Alert::info('You have successfully updated the promotion.');
    return redirect()->route('platform.promotion.list');
  }

  public function remove(Promotion $promotion) {
    $promotion->delete();
    Alert::info('You have successfully deleted the promotion.');
    return redirect()->route('platform.promotion.list');
  }
}
