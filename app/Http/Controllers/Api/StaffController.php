<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Staff;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class StaffController extends Controller
{
    //

    public function index(Request $request)
    {
        if ($request->has('resto_id')) {
            $staff = Staff::where('resto_id', $request->resto_id)->with('resto', 'roles')->get();
            if ($staff->isEmpty()) {
                return response()->json(['message' => 'No Staff found'], 404);
            }
        } 
        else {
            $staff = Staff::with('resto', 'role')->get();
            if ($staff->isEmpty()) {
                return response()->json(['message' => 'No Staff found'], 404);
            }
        }

        return response()->json($staff);
    }

    public function store(Request $request)
    {
        try{
            $validator = Validator::make($request->all(), [
                'first_name' => 'nullable|string|max:255',
                'last_name' => 'nullable|string|max:255',
                'email' => 'required|string|email|max:255|unique:staffs',
                'password' => 'required|string|min:8',
                'phone' => 'nullable|string|max:255',
                'image' => 'nullable|string|max:255',
                'username' => 'required|string|max:255|unique:staffs',
                'role_id' => 'required|exists:roles,id',
                'resto_id' => 'required|exists:restos,id'
            ]);
    
            if($validator->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validator->errors()
                ], 401);
            }
            $validated = $validator->validated();
            $validated['password'] = Hash::make($validated['password']);
    
            $staff = Staff::create($validated);
    
            return response()->json([
                'status' => true,
                'message' => 'Staff Created Successfully',
                'staff' => $staff
            ], 200);
        }catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function show($id)
    {
        $staff = Staff::with('resto', 'role')->find($id);

        if (!$staff) {
            return response()->json(['message' => 'Staff not found'], 404);
        }

        return response()->json($staff);
    }

    public function update(Request $request, $id)
    {
        $staff = Staff::find($id);

        if (!$staff) {
            return response()->json(['message' => 'Staff not found'], 404);
        }

        // $validator = Validator::make($request->all(), [
        //     'first_name' => 'nullable|string|max:255',
        //     'last_name' => 'nullable|string|max:255',
        //     'email' => 'required|string|email|max:255|unique:staffs,email,'.$id,
        //     'password' => 'nullable|string|min:8',
        //     'phone' => 'nullable|string|max:255',
        //     'image' => 'nullable|string|max:255',
        //     'username' => 'required|string|max:255|unique:staffs,username,'.$id,
        //     'role_id' => 'nullable|exists:roles,id',
        //     'resto_id' => 'required|exists:restos,id'
        // ]);

        // if ($validator->fails()) {
        //     return response()->json($validator->errors(), 400);
        // }

        if ($request->has('password')) {
            $request->merge(['password' => Hash::make($request->password)]);
        }

        $staff->update($request->all());

        return response()->json(
            [
                'Status' => true,
                'message' => 'Staff updated successfully', 
                'data' => $staff]
        );
    }

    public function destroy($id)
    {
        $staff = Staff::find($id);

        if (!$staff) {
            return response()->json(['message' => 'Staff not found'], 404);
        }

        $staff->delete();

        return response()->json(['Status' => true,'message' => 'Staff deleted successfully']);
    }
}
