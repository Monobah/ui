<?php

namespace App\Orchid\Screens\BeShop;

use App\Models\Promocode;
use Orchid\Screen\Screen;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Fields\Input;
use Orchid\Support\Facades\Layout;
use Orchid\Screen\Fields\TextArea;
use Orchid\Screen\Fields\Select;
use Orchid\Screen\Fields\Cropper;
use Orchid\Screen\Fields\CheckBox;
use Orchid\Screen\Fields\Group;
use Orchid\Screen\Fields\Upload;
use Illuminate\Http\Request;
use Orchid\Support\Facades\Alert;

class ProductPromocodesEditScreen extends Screen {
    public $promocode;

    public function query(Promocode $promocode): iterable {
        return ['promocode' => $promocode];
    }

    public function name(): ?string {
        return $this->promocode->exists ? 'Edit promocode' : 'Creating a new promocode';
    }

    public function commandBar(): iterable {
        return [
            Button::make('Create promocode')->icon('pencil')->method('createOrUpdate')->canSee(!$this->promocode->exists),
            Button::make('Update')->icon('note')->method('createOrUpdate')->canSee($this->promocode->exists),
            Button::make('Remove')->icon('trash')->method('remove')->canSee($this->promocode->exists),
        ];
    }

    public function layout(): iterable {
        return [
            Layout::rows([

                Input::make('promocode.name')
                    ->title('Name'),

                Input::make('promocode.code')
                    ->title('Code'),

                Input::make('promocode.discount')
                    ->title('Discount'),

                Input::make('promocode.valid_till')
                    ->title('Valid Till'),

            ])
        ];
    }

    public function createOrUpdate(Promocode $promocode, Request $request) {
        $promocode->fill($request->get('promocode'))->save();

        Alert::info('You have successfully created an promocode.');

        return redirect()->route('platform.product.promocodes');
    }

    public function remove(Promocode $promocode) {
        $promocode->delete();

        Alert::info('You have successfully deleted the promocode.');

        return redirect()->route('platform.product.promocodes');
    }
}
