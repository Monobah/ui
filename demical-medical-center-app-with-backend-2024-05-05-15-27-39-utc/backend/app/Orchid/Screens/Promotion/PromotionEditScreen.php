<?php

namespace App\Orchid\Screens\Promotion;

use Orchid\Screen\Screen;

use App\Models\Banner;
use App\Models\Promotion;
use Illuminate\Http\Request;
use Orchid\Screen\Fields\Input;
use Illuminate\Validation\Rule;
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

  private function validateRequest(Request $request) {
    $rules = [
      'promotion.name' => ['required', 'min:3', 'max:225', Rule::unique('specialities', 'name')->ignore($this->promotion->id)],
    ];

    return $request->validate($rules);
  }

  public function create(Request $request) {
    $promotionData = $this->validateRequest($request);

    $promotionData['name'] =  ucwords($request->input('promotion.name'));

    $this->promotion->fill($promotionData)->save();
    Alert::info('You have successfully created a promotion.');
    return redirect()->route('platform.promotion.list');
  }

  public function update(Request $request) {
    $promotionData = $this->validateRequest($request);

    $promotionData['name'] =  ucwords($request->input('promotion.name'));

    $this->promotion->fill($promotionData)->save();
    Alert::info('You have successfully updated the promotion.');
    return redirect()->route('platform.promotion.list');
  }

  public function remove(Promotion $promotion) {

    $promotion_used_in_banner = Banner::where('promotion', $promotion->name)->first();

    if ($promotion_used_in_banner) {
      Alert::error('You cannot delete this promotion because it is used in the carousel.');
      return redirect()->route('platform.promotion.list');
    }

    $promotion->delete();
    Alert::info('You have successfully deleted the promotion.');
    return redirect()->route('platform.promotion.list');
  }
}
