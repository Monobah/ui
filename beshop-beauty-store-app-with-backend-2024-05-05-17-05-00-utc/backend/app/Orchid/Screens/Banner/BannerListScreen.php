<?php

namespace App\Orchid\Screens\Banner;

use Orchid\Screen\Screen;

use Orchid\Screen\TD;
use App\Models\Banner;
use Illuminate\Support\Str;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Actions\Link;
use Orchid\Support\Facades\Alert;
use Orchid\Screen\Actions\Button;
use Orchid\Support\Facades\Layout;
use Orchid\Screen\Actions\DropDown;
use Illuminate\Support\Facades\Storage;

class BannerListScreen extends Screen {
  public $banners;

  public function query(): iterable {
    return [
      'banners' => Banner::filters()->defaultSort('updated_at', 'desc')->paginate()
    ];
  }

  public function name(): ?string {
    return 'Banners';
  }

  public function description(): ?string {
    return 'You can create up to 2 banners.';
  }

  public function commandBar(): iterable {
    return [
      Link::make('Create')
        ->icon('bs.plus-circle')
        ->route('platform.banner.edit')
        ->canSee($this->banners->count() < 2),
    ];
  }

  public function layout(): iterable {
    return [
      Layout::table('banners', [
        TD::make('image', 'Image')
          ->cantHide()
          ->render(function (Banner $banner) {
            return '<img src="' . $banner->image . '" width="100" height="60" style="object-fit: cover; object-position: center;">';
          }),

        TD::make('updated_at', __('Last edit'))
          ->sort()
          ->cantHide()
          ->align(TD::ALIGN_CENTER)
          ->filter(Input::make())
          ->render(function (Banner $banner) {
            return $banner->updated_at->format('M j, Y');
          }),

        TD::make('id', 'ID')
          ->cantHide()
          ->sort()
          ->filter(Input::make())
          ->align(TD::ALIGN_CENTER)
          ->render(function (Banner $banner) {
            return '#' . $banner->id;
          }),

        TD::make(__('Actions'))
          ->cantHide()
          ->align(TD::ALIGN_CENTER)
          ->width('100px')
          ->render(fn (Banner $banner) => DropDown::make()
            ->icon('bs.three-dots-vertical')
            ->list([
              Link::make(__('Edit'))
                ->route('platform.banner.edit', $banner->id)
                ->icon('bs.pencil'),

              Button::make('Delete')
                ->icon('bs.trash3')
                ->confirm('Are you sure you want to delete this banner ?')
                ->method('remove')
                ->parameters([
                  'banner' => $banner->id,
                ]),

            ])),
      ])
    ];
  }

  public function remove(Banner $banner) {
    $image = str_replace(asset('storage/'), '', $banner->image);
    Storage::disk('public')->delete($image);

    $banner->delete();
    Alert::info('You have successfully deleted the banner.');
    return redirect()->route('platform.banner.list');
  }
}
