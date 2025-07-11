<?php

declare(strict_types=1);

use App\Orchid\Screens\Examples\ExampleScreen;
use App\Orchid\Screens\PlatformScreen;
use App\Orchid\Screens\Role\RoleEditScreen;
use App\Orchid\Screens\Role\RoleListScreen;
use App\Orchid\Screens\User\UserEditScreen;
use App\Orchid\Screens\User\UserListScreen;
use App\Orchid\Screens\User\UserProfileScreen;
use Illuminate\Support\Facades\Route;
use Tabuna\Breadcrumbs\Trail;

use App\Orchid\Screens\Category\CategoryListScreen;
use App\Orchid\Screens\Category\CategoryEditScreen;
use App\Orchid\Screens\Banner\BannerListScreen;
use App\Orchid\Screens\Banner\BannerEditScreen;
use App\Orchid\Screens\Promotion\PromotionListScreen;
use App\Orchid\Screens\Promotion\PromotionEditScreen;
use App\Orchid\Screens\Doctor\DoctorEditScreen;
use App\Orchid\Screens\Doctor\DoctorListScreen;
use App\Orchid\Screens\Speciality\SpecialityEditScreen;
use App\Orchid\Screens\Speciality\SpecialityListScreen;
use App\Orchid\Screens\Diagnostic\DiagnosticListScreen;
use App\Orchid\Screens\Diagnostic\DiagnosticEditScreen;
use App\Orchid\Screens\Appointment\AppointmentListScreen;
use App\Orchid\Screens\Appointment\AppointmentDetailScreen;
use App\Orchid\Screens\AppUser\AppUserListScreen;

/*
|--------------------------------------------------------------------------
| Dashboard Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the need "dashboard" middleware group. Now create something great!
|
*/

// Platform > Doctors
Route::screen('doctor/list', DoctorListScreen::class)
  ->name('platform.doctor.list');

Route::screen('doctor/edit/{doctor?}', DoctorEditScreen::class)
  ->name('platform.doctor.edit');

// Platform > Appointments
Route::screen('appointment/list', AppointmentListScreen::class)
  ->name('platform.appointment.list');

Route::screen('appointment/edit/{appointment?}', AppointmentDetailScreen::class)
  ->name('platform.appointment.detail');

// Platform > Specialities
Route::screen('speciality/list', SpecialityListScreen::class)
  ->name('platform.speciality.list');

Route::screen('speciality/edit/{speciality?}', SpecialityEditScreen::class)
  ->name('platform.speciality.edit');

// Platform > Diagnostics
Route::screen('diagnostic/list', DiagnosticListScreen::class)
  ->name('platform.diagnostic.list');

Route::screen('diagnostic/edit/{diagnostic?}', DiagnosticEditScreen::class)
  ->name('platform.diagnostic.edit');

// Platform > Categories
Route::screen('category/list', CategoryListScreen::class)
  ->name('platform.category.list');

Route::screen('category/edit/{category?}', CategoryEditScreen::class)
  ->name('platform.category.edit');

// Platform > Banners
Route::screen('banner/list', BannerListScreen::class)
  ->name('platform.banner.list');

Route::screen('banner/edit/{banner?}', BannerEditScreen::class)
  ->name('platform.banner.edit');

// Platform > AppUsers
Route::screen('appuser/list', AppUserListScreen::class)
  ->name('platform.appuser.list');


// Platform > Promotions
Route::screen('promotion/list', PromotionListScreen::class)
  ->name('platform.promotion.list');

Route::screen('promotion/edit/{promotion?}', PromotionEditScreen::class)
  ->name('platform.promotion.edit');

// Main
Route::screen('/main', PlatformScreen::class)
  ->name('platform.main');

// Platform > Profile
Route::screen('profile', UserProfileScreen::class)
  ->name('platform.profile')
  ->breadcrumbs(fn (Trail $trail) => $trail
    ->parent('platform.index')
    ->push(__('Profile'), route('platform.profile')));

// Platform > System > Users > User
Route::screen('users/{user}/edit', UserEditScreen::class)
  ->name('platform.systems.users.edit')
  ->breadcrumbs(fn (Trail $trail, $user) => $trail
    ->parent('platform.systems.users')
    ->push($user->name, route('platform.systems.users.edit', $user)));

// Platform > System > Users > Create
Route::screen('users/create', UserEditScreen::class)
  ->name('platform.systems.users.create')
  ->breadcrumbs(fn (Trail $trail) => $trail
    ->parent('platform.systems.users')
    ->push(__('Create'), route('platform.systems.users.create')));

// Platform > System > Users
Route::screen('users', UserListScreen::class)
  ->name('platform.systems.users')
  ->breadcrumbs(fn (Trail $trail) => $trail
    ->parent('platform.index')
    ->push(__('Users'), route('platform.systems.users')));

// Platform > System > Roles > Role
Route::screen('roles/{role}/edit', RoleEditScreen::class)
  ->name('platform.systems.roles.edit')
  ->breadcrumbs(fn (Trail $trail, $role) => $trail
    ->parent('platform.systems.roles')
    ->push($role->name, route('platform.systems.roles.edit', $role)));

// Platform > System > Roles > Create
Route::screen('roles/create', RoleEditScreen::class)
  ->name('platform.systems.roles.create')
  ->breadcrumbs(fn (Trail $trail) => $trail
    ->parent('platform.systems.roles')
    ->push(__('Create'), route('platform.systems.roles.create')));

// Platform > System > Roles
Route::screen('roles', RoleListScreen::class)
  ->name('platform.systems.roles')
  ->breadcrumbs(fn (Trail $trail) => $trail
    ->parent('platform.index')
    ->push(__('Roles'), route('platform.systems.roles')));

// Example...
Route::screen('example', ExampleScreen::class)
  ->name('platform.example')
  ->breadcrumbs(fn (Trail $trail) => $trail
    ->parent('platform.index')
    ->push('Example Screen'));

//Route::screen('idea', Idea::class, 'platform.screens.idea');
