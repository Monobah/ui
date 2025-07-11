<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Carbon\Carbon;
use Orchid\Screen\AsSource;
use Orchid\Filters\Filterable;

class Appointment extends Model {
  use AsSource;
  use HasFactory;
  use Filterable;

  protected $connection = 'mysql';
  protected $table = 'appointments';

  protected $fillable = [
    'id',
    'date',
    'user_id',
    'doctor_id',
    'status',
    'upcoming'

  ];

  protected $allowedSorts = [
    'id',
    'date',
    'updated_at',
  ];

  protected $allowedFilters = [
    'id',
    'date',
    'updated_at',
  ];

  public function getUpcomingAttribute() {
    $appointmentDate = Carbon::parse($this->date);
    return Carbon::now()->lessThan($appointmentDate);
  }
}
