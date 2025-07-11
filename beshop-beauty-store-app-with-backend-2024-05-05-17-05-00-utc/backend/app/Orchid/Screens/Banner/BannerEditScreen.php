<?php

namespace App\Orchid\Screens\Banner;

use App\Models\Banner;
use App\Models\Promotion;
use Orchid\Screen\Screen;
use Illuminate\Http\Request;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Select;
use Orchid\Support\Facades\Alert;
use Orchid\Screen\Actions\Button;
use Orchid\Support\Facades\Layout;
use Illuminate\Support\Facades\Storage;

class BannerEditScreen extends Screen {

  public $banner;
  public $promotions;


  public function query(Banner $banner): iterable {
    return [
      'banner' => $banner,
      'promotions' => Promotion::all(),
    ];
  }

  public function name(): ?string {
    return $this->banner->exists ? 'Edit banner' : 'Creating a new banner';
  }

  public function commandBar(): iterable {
    return [
      Button::make('Create banner')
        ->icon('pencil')
        ->method('create')
        ->canSee(!$this->banner->exists),

      Button::make('Update')
        ->icon('note')
        ->method('update')
        ->canSee($this->banner->exists),

      Button::make('Remove')
        ->icon('trash')
        ->method('remove')
        ->canSee($this->banner->exists)
        ->confirm('Are you sure you want to delete this banner ?'),
    ];
  }

  public function layout(): iterable {
    return [
      Layout::rows([

        Input::make('banner.image')
          ->required(!$this->banner->exists)
          ->type('file')
          ->title(__('Image:')),

      ])
    ];
  }

  public function create(Request $request) {
    $request->validate([
      'banner.image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
    ]);

    $banner = [
      'image' => asset('storage/' . $request->file('banner.image')->store('', 'public')),
    ];

    $this->banner->fill($banner)->save();
    Alert::info('You have successfully created a banner.');
    return redirect()->route('platform.banner.list');
  }

  public function update(Request $request) {
    $request->validate([
      'banner.image' => 'image|mimes:jpeg,png,jpg|max:2048' . $this->banner->id,
    ]);

    if ($request->hasFile('banner.image')) {
      $image = str_replace(asset('storage/'), '', $this->banner->image);
      Storage::disk('public')->delete($image);
      $banner['image'] = asset('storage/' . $request->file('banner.image')->store('', 'public'));
    }

    $this->banner->fill($banner)->save();
    Alert::info('You have successfully updated the banner.');
    return redirect()->route('platform.banner.list');
  }

  public function remove(Banner $banner) {
    $image = str_replace(asset('storage/'), '', $banner->image);
    Storage::disk('public')->delete($image);

    $banner->delete();
    Alert::info('You have successfully deleted the banner.');
    return redirect()->route('platform.banner.list');
  }
}
