<?php

namespace App\Orchid\Screens\Diagnostic;

use Orchid\Screen\TD;
use Orchid\Screen\Screen;
use App\Models\Diagnostic;
use Illuminate\Support\Str;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Actions\Link;
use Orchid\Support\Facades\Alert;
use Orchid\Screen\Actions\Button;
use Orchid\Support\Facades\Layout;
use Orchid\Screen\Actions\DropDown;
use Illuminate\Support\Facades\Storage;

class DiagnosticListScreen extends Screen {
  public function query(): iterable {
    return [
      'diagnostics' => Diagnostic::filters()->defaultSort('updated_at', 'desc')->paginate(10)
    ];
  }

  public function name(): ?string {
    return 'Diagnostics';
  }

  public function commandBar(): iterable {
    return [
      Link::make('Create')
        ->icon('bs.plus-circle')
        ->route('platform.diagnostic.edit'),
    ];
  }

  public function layout(): iterable {
    return [
      Layout::table('diagnostics', [

        TD::make('image', 'Image')
          ->cantHide()
          ->render(function (Diagnostic $diagnostic) {
            return '<div style="width: 53px; height: 53px; background-color: ' . $diagnostic->background_color . '; display: flex; align-items: center; justify-content: center;"><img src="' . $diagnostic->image . '" width="30" height="30" style="object-fit: cover; object-position: center; border-radius: 7%;"></div>';
          }),

        TD::make('name', 'Name')
          ->sort()
          ->cantHide()
          ->filter(Input::make())
          ->render(function (Diagnostic $diagnostic) {
            return Link::make(Str::ucfirst($diagnostic->name))->route('platform.diagnostic.edit', $diagnostic->id);
          }),

        TD::make('description', 'Description')
          ->sort()
          ->cantHide()
          ->filter(Input::make())
          ->render(function (Diagnostic $diagnostic) {
            return Str::limit($diagnostic->description, 50);
          }),

        TD::make('updated_at', __('Last edit'))
          ->sort()
          ->cantHide()
          ->filter(Input::make())
          ->render(function (Diagnostic $diagnostic) {
            return $diagnostic->updated_at->format('M j, Y');
          }),

        TD::make(__('Actions'))
          ->cantHide()
          ->align(TD::ALIGN_CENTER)
          ->width('100px')
          ->render(fn (Diagnostic $diagnostic) => DropDown::make()
            ->icon('bs.three-dots-vertical')
            ->list([
              Link::make(__('Edit'))
                ->route('platform.diagnostic.edit', $diagnostic->id)
                ->icon('bs.pencil'),
              Button::make('Delete')
                ->icon('bs.trash3')
                ->confirm('Are you sure you want to delete this diagnostic ?')
                ->method('remove')
                ->parameters([
                  'diagnostic' => $diagnostic->id,
                ]),
            ])),
      ])
    ];
  }

  private function deleteSingleImage($image) {
    $image = str_replace(asset('storage/'), '', $image);
    Storage::disk('public')->delete($image);
  }

  public function remove(Diagnostic $diagnostic) {
    $this->deleteSingleImage($diagnostic->image);

    $diagnostic->delete();
    Alert::info('You have successfully deleted a diagnostic.');
    return redirect()->route('platform.diagnostic.list');
  }
}
