<?php

declare(strict_types=1);

namespace App\Orchid;

use Orchid\Platform\Dashboard;
use Orchid\Platform\ItemPermission;
use Orchid\Platform\OrchidServiceProvider;
use Orchid\Screen\Actions\Menu;
use Orchid\Support\Color;
use App\Models\Appointment;

class PlatformProvider extends OrchidServiceProvider {
  /**
   * Bootstrap the application services.
   *
   * @param Dashboard $dashboard
   *
   * @return void
   */
  public function boot(Dashboard $dashboard): void {
    parent::boot($dashboard);

    // ...
  }

  /**
   * Register the application menu.
   *
   * @return Menu[]
   */
  public function menu(): array {
    return [

      Menu::make('Doctors')
        ->title('Navigation')
        ->icon('bs.person-circle')
        ->route('platform.doctor.list'),

      Menu::make('Appointments')
        ->icon('bs.calendar')
        ->badge(function () {
          if (Appointment::where('status', 'pending')->count() > 0) {
            return Appointment::where('status', 'pending')->count();
          }
        })
        // ->badge(function () {
        //   if (Appointment::where('status', 'pending')->count() > 0) {
        //     return Appointment::where('status', 'pending')->count();
        //   }
        // })
        ->route('platform.appointment.list'),

      Menu::make('Banner')
        ->icon('bs.image')
        ->route('platform.banner.list'),

      Menu::make('Categories')
        ->title('Details')
        ->icon('bs.grid')
        ->route('platform.category.list'),

      Menu::make('Diagnostics')
        ->icon('bs.thermometer-half')
        ->route('platform.diagnostic.list'),

      Menu::make('Specialities')
        ->icon('bs.award')
        ->route('platform.speciality.list'),

      Menu::make('Promotions')
        ->icon('bs.gift')
        ->route('platform.promotion.list'),

      Menu::make('App Users')
        ->icon('bs.person')
        ->route('platform.appuser.list'),

      Menu::make(__('Users'))
        ->icon('bs.people')
        ->route('platform.systems.users')
        ->permission('platform.systems.users')
        ->title(__('Access Controls')),

      Menu::make(__('Roles'))
        ->icon('bs.shield')
        ->route('platform.systems.roles')
        ->permission('platform.systems.roles')
        ->divider(),

      Menu::make('Documentation')
        ->title('Docs')
        ->icon('bs.box-arrow-up-right')
        ->url('https://orchid.software/en/docs')
        ->target('_blank'),

      Menu::make('Changelog')
        ->icon('bs.box-arrow-up-right')
        ->url('https://github.com/orchidsoftware/platform/blob/master/CHANGELOG.md')
        ->target('_blank')
        ->badge(fn () => Dashboard::version(), Color::DARK),
    ];
  }

  /**
   * Register permissions for the application.
   *
   * @return ItemPermission[]
   */
  public function permissions(): array {
    return [
      ItemPermission::group(__('System'))
        ->addPermission('platform.systems.roles', __('Roles'))
        ->addPermission('platform.systems.users', __('Users')),
    ];
  }
}
