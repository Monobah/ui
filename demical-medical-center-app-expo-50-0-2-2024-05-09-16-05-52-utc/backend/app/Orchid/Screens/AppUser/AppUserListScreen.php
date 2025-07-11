<?php

namespace App\Orchid\Screens\AppUser;

use Orchid\Screen\TD;
use App\Models\AppUser;
use Orchid\Screen\Screen;
use Orchid\Screen\Fields\Input;
use Orchid\Support\Facades\Layout;

class AppUserListScreen extends Screen {

  public $appUsers;

  public function query(): iterable {
    return [
      'appUsers' => AppUser::filters()->defaultSort('updated_at', 'desc')->paginate(10),
    ];
  }

  public function name(): ?string {
    return 'App Users';
  }

  public function commandBar(): iterable {
    return [];
  }

  public function layout(): iterable {
    return [
      Layout::table('appUsers', [
        TD::make('user_name', 'Name')
          ->sort()
          ->cantHide()
          ->filter(Input::make())
          ->render(function (AppUser $appUser) {
            return $appUser->user_name;
          }),
        TD::make('user_email', 'Email')
          ->sort()
          ->cantHide()
          ->filter(Input::make())
          ->render(function (AppUser $appUser) {
            return $appUser->user_email;
          }),
        TD::make('user_phone', 'Phone')
          ->sort()
          ->cantHide()
          ->filter(Input::make())
          ->render(function (AppUser $appUser) {
            return $appUser->user_phone ?? 'N/A';
          }),
        TD::make('created_at', 'Created At')
          ->cantHide()
          ->sort()
          ->filter(Input::make())
          ->render(function (AppUser $appUser) {
            return $appUser->updated_at->format('M j, Y');
          }),
      ])
    ];
  }
}
