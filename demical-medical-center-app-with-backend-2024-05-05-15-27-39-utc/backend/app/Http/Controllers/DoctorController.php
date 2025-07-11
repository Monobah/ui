<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;

// return Product::where('is_active', 1)->get();

class DoctorController extends Controller {
  /**
   * Display a listing of the resource.
   */
  public function index() {
    $doctors = Doctor::where('is_available', 1)->get();
    $doctors->map(function ($doctor) {
      $doctor->certificates = json_decode($doctor->certificates, true);
      return $doctor;
    });
    return $doctors;
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create() {
    //
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request) {
    //
  }

  /**
   * Display the specified resource.
   */
  public function show($doctorId) {
    $doctor = Doctor::where('id', $doctorId)->first();
    $doctor->certificates = json_decode($doctor->certificates, true);
    return $doctor;
  }

  // public function show($userId) {
  //   return Appointment::where('user_id', $userId)->get();
  // }


  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Doctor $doctor) {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Doctor $doctor) {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Doctor $doctor) {
    //
  }
}
