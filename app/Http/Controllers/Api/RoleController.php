<?php

namespace App\Http\Controllers\Api;

use App\Models\Role;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return response()->json([
            "message" => "User Created"
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validatedData = $request->validate([
            'name' => 'required|string|max:255|unique:roles',
        ]);

        // Create a new role using the validated data
        $role = Role::create($validatedData);

        // Return a response, could be a success message or the created role itself
        return response()->json([
            'message' => 'Role created successfully',
            'role' => $role
        ], Response::HTTP_CREATED); // HTTP status code 201 for created resource
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
