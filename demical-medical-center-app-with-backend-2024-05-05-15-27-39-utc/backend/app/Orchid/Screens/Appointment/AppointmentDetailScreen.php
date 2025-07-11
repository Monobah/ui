<?php

namespace App\Orchid\Screens\Appointment;

use Orchid\Screen\Screen;

use Orchid\Screen\TD;
use App\Models\Product;
use Orchid\Screen\Sight;
use App\Models\Appointment;
use Orchid\Support\Facades\Alert;
use Orchid\Screen\Actions\Button;
use Orchid\Support\Facades\Layout;

class AppointmentDetailScreen extends Screen {

  public $appointment;

  public function query(Appointment $appointment): iterable {
    $this->appointment = $appointment;
    return [
      'appointment' => $this->appointment,
    ];
  }

  public function name(): ?string {
    return 'Appointment Detail';
  }

  public function commandBar(): iterable {
    return [

      Button::make('Accept')
        ->icon('check')
        ->method('accept')
        ->canSee($this->appointment->status == 'pending')
        ->confirm('Are you sure you want to accept this appointment ?'),

      Button::make('Decline')
        ->icon('bs.x-circle')
        ->method('decline')
        ->canSee($this->appointment->status == 'pending')
        ->confirm('Are you sure you want to decline this appointment ?'),

      Button::make('Remove')
        ->icon('trash')
        ->method('remove')
        ->confirm(
          'If you delete this appointment, all related data will be deleted.'
        )
    ];
  }

  public function layout(): iterable {
    return [
      Layout::legend('appointment', [
        Sight::make('id', 'Appointment ID:')->render(function (Appointment $appointment) {
          return '#' . $appointment->id;
        }),
        Sight::make('date', 'Date:')->render(function (Appointment $appointment) {
          return $appointment->date;
        }),
        Sight::make('time', 'Time:')->render(function (Appointment $appointment) {
          return $appointment->time;
        }),
        Sight::make('patient_name', 'Patient Name:')->render(function (Appointment $appointment) {
          return $appointment->patient_name;
        }),
        Sight::make('patient_email', 'Patient Email:')->render(function (Appointment $appointment) {
          return $appointment->patient_email;
        }),
        Sight::make('patient_phone_number', 'Patient Phone Number:')->render(function (Appointment $appointment) {
          return $appointment->patient_phone_number;
        }),
      ]),
    ];
  }

  public function accept(Appointment $appointment) {
    $appointment->status = 'accepted';
    $appointment->save();
    Alert::info('Appointment accepted');
    return redirect()->route('platform.appointment.list');
  }

  public function decline(Appointment $appointment) {
    $appointment->status = 'declined';
    $appointment->save();
    Alert::info('Appointment declined');
    return redirect()->route('platform.appointment.list');
  }

  public function remove(Appointment $appointment) {
    $appointment->delete();
    Alert::info('Appointment deleted');
    return redirect()->route('platform.appointment.list');
  }
}
