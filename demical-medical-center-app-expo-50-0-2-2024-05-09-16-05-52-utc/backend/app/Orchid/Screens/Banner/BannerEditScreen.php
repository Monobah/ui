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
use Orchid\Screen\Fields\Upload;
use Orchid\Screen\Fields\Picture;
use Illuminate\Validation\Rule;
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


        Select::make('banner.promotion')
          ->title(__('Promotion:'))
          ->required(!$this->banner->exists)
          ->placeholder('Select promotion')
          ->disabled(!$this->promotions->count())
          ->fromModel(Promotion::class, 'name', 'name')
          ->empty($this->promotions->count() ? 'Select promotion' : 'Please create promotions first in the "promotions" section.')
          ->placeholder($this->promotions->count() ? 'Select promotion' : 'Please create promotions first in the "promotions" section.'),

        Input::make('banner.image')
          ->required(!$this->banner->exists)
          ->type('file')
          ->title(__('Image:')),
      ]),

    ];
  }

  private function validateRequest(Request $request) {
    $request->validate([
      'banner.promotion' => 'required',
      'banner.image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048' . ($this->banner->exists ? '|sometimes' : '|required'),
    ]);
  }

  private function deleteSingleImage($image) {
    $image = str_replace(asset('storage/'), '', $image);
    Storage::disk('public')->delete($image);
  }

  public function create(Request $request) {
    $bannerData = $this->validateRequest($request);

    $bannerData['promotion'] = $request->input('banner.promotion');

    if ($request->hasFile('banner.image')) {
      $path = $request->file('banner.image')->store('', 'public');
      if ($path !== false) {
        $bannerData['image'] = asset('storage/' . $path);
      }
    }

    $this->banner->fill($bannerData)->save();
    Alert::info('You have successfully created a banner.');
    return redirect()->route('platform.banner.list');
  }

  public function update(Request $request) {
    $bannerData = $this->validateRequest($request);

    $bannerData['promotion'] = $request->input('banner.promotion');

    if ($request->hasFile('banner.image')) {
      $path = $request->file('banner.image')->store('', 'public');
      if ($path !== false) {
        $bannerData['image'] = asset('storage/' . $path);
      }
    }

    $this->banner->fill($bannerData)->save();
    Alert::info('You have successfully updated the banner.');
    return redirect()->route('platform.banner.list');
  }

  public function remove(Banner $banner) {
    $this->deleteSingleImage($this->banner->image);

    $banner->delete();
    Alert::info('You have successfully deleted the banner.');
    return redirect()->route('platform.banner.list');
  }
}
