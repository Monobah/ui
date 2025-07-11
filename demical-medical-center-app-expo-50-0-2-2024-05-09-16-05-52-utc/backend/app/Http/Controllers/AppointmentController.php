<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller {
  /**
   * Display a listing of the resource.
   */
  public function index() {
    return Appointment::all();
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create() {
    //
  }

  public function store(Request $request) {
    $request->validate([
      'day' => 'required',
      'year' => 'required',
      'time' => 'required',
      'month' => 'required',
      'patient_name' => 'required',
      'patient_email' => 'required|email',
      'patient_phone_number' => 'required',
      'user_id' => 'required|exists:users,id',
      'doctor_id' => 'required|exists:doctors,id',
      'status' => 'required',
    ]);

    $appointment = new Appointment;
    $appointment->day = $request->input('day');
    $appointment->year = $request->input('year');
    $appointment->time = $request->input('time');
    $appointment->month = $request->input('month');
    $appointment->patient_name = $request->input('patient_name');
    $appointment->patient_email = $request->input('patient_email');
    $appointment->patient_phone_number = $request->input('patient_phone_number');
    $appointment->user_id = $request->input('user_id');
    $appointment->doctor_id = $request->input('doctor_id');
    $appointment->status = $request->input('status');
    $appointment->save();

    return response()->json([
      'status' => 'success',
      'message' => 'Appointment created successfully',
      'data' => $appointment
    ], 201);
  }

  /**
   * Display the specified resource.
   */
  public function show($userId) {
    return Appointment::where('user_id', $userId)->get();
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Appointment $appointment) {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Appointment $appointment) {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Appointment $appointment) {
    //
  }
}
