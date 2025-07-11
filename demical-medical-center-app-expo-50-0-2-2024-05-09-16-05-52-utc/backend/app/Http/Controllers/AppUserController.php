<?php

namespace App\Http\Controllers;

use App\Models\AppUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AppUserController extends Controller {
  /**
   * Display a listing of the resource.
   */
  public function index() {
    //
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
    info($request->all());

    $request->validate([
      'user_name' => 'required',
      'user_email' => 'required|email',
      'user_password' => 'required',
    ]);

    $userExists = AppUser::where('user_name', $request->user_name)
      ->orWhere('user_email', $request->user_email)
      ->exists();

    if ($userExists) {
      return response()->json([
        'message' => 'User with this name or email already exists',
      ], 409); // 409 Conflict
    }

    $input = $request->all();
    $input['user_password'] = Hash::make($request->user_password);

    $appUser = AppUser::create($input);

    return response()->json([
      'message' => 'User created successfully',
      'user' => $appUser,
    ], 201); // 201 Created
  }


  // LOGIN //
  public function login(Request $request) {
    info($request->all());

    $request->validate([
      'user_email' => 'required|email',
      'user_password' => 'required',
    ]);

    $user = AppUser::where('user_email', $request->user_email)->first();

    if (!$user || !Hash::check($request->user_password, $user->user_password)) {
      return response()->json([
        'message' => 'Invalid email or password',
      ], 401); // 401 Unauthorized
    }

    return response()->json([
      'message' => 'User logged in successfully',
      'user' => $user,
    ], 200); // 200 OK
  }

  /**
   * Display the specified resource.
   */
  public function show($id) {
    $user = AppUser::find($id);

    if ($user === null) {
      return response()->json(['message' => 'User not found'], 404);
    }

    return response()->json($user);
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(AppUser $appUser) {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, AppUser $appUser) {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(AppUser $appUser) {
    //
  }
}
