<?php

namespace App\Http\Controllers\Api;

use App\Models\Super;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class SuperController extends Controller
{
   /**
     * Create User
     * @param Request $request
     * @return User 
     */
    public function createUser(Request $request)
    {
        try {
            //Validated
            $validateUser = Validator::make($request->all(), 
            [
                'first_name' => 'required',
                'last_name' => 'required',
                'email' => 'required|email|unique:users,email',
                'password' => 'required',
                'role_id' => 'required|exists:roles,id'
            ]);

            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            $user = Super::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'phone' => $request->phone,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'role_id' => $request->role_id,
            ]);

            return response()->json([
                'status' => true,
                'message' => 'User Created Successfully',
                'token' => $user->createToken("API TOKEN")->plainTextToken
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
      
    /**
     * Display a listing of all users.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAllUsers()
    {
        $users = Super::all(); // Retrieve all users from the database
        return response()->json([
            'status' => true,
            'message' => 'Users retrieved successfully',
            'users' => $users
        ], 200);
    }

    /**
     * Update an existing user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id User ID
     * @return \Illuminate\Http\Response
     */
    public function updateUser(Request $request, $id)
    {
        try {
            $user = Super::findOrFail($id);

            $validateData = Validator::make($request->all(), [
                'first_name' => 'sometimes|required',
                'last_name' => 'sometimes|required',
                'email' => 'sometimes|required|email|unique:users,email,' . $user->id,
                'password' => 'sometimes|required',
                'role_id' => 'sometimes|required|exists:roles,id'
            ]);

            if ($validateData->fails()) {
                return response()->json([
                    'status' => false,
                    'message' => 'Validation error',
                    'errors' => $validateData->errors()
                ], 401);
            }

            // Update the user with request data
            $user->update($request->all());

            return response()->json([
                'status' => true,
                'message' => 'User updated successfully',
                'user' => $user
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }


        /**
     * Delete a user.
     *
     * @param  int  $id User ID
     * @return \Illuminate\Http\Response
     */
    public function deleteUser($id)
    {
        try {
            $user = Super::findOrFail($id);

            // Delete the user
            $user->delete();

            return response()->json([
                'status' => true,
                'message' => 'User deleted successfully',
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Login The User
     * @param Request $request
     * @return Super
     */
    // public function loginUser(Request $request)
    // {
    //     try {
    //         $validateUser = Validator::make($request->all(), 
    //         [
    //         'email' => 'required|email',
    //         'password' => 'required',
    //         ]);

    //         if($validateUser->fails()){
    //             return response()->json([
    //                 'status' => false,
    //                 'message' => 'validation error',
    //                 'errors' => $validateUser->errors()
    //             ], 401);
    //         }

    //         $credentials = $validateUser->validated();
    
    //         if(!Auth::attempt($credentials)){
    //             return response()->json([
    //                 'status' => false,
    //                 'message' => 'Email or Password does not match with our record.',
    //             ], 401);
    //         }

            
    //         // $user = User::where('email', $request->email)->first();
    //         $super = Auth::user(); // Get the authenticated super
    //         $token = $super->createToken('SuperToken')->plainTextToken; 
    //         return response()->json([
    //             'status' => true,
    //             'message' => 'Super logged in successfully',
    //             'super' => $super,
    //             'token' => $token,
    //         ], 200);

    //     } catch (\Throwable $th) {
    //         return response()->json([
    //             'status' => false,
    //             'message' => $th->getMessage()
    //         ], 500);
    //     }
    // }

    public function loginUser(Request $request)
        {
            $request->validate([
                'email' => 'required|email',
                'password' => 'required',
            ]);

            // Check if the user exists with given email
            // $user = User::where('email', $request->email)->first();
            $super = Super::where('email', $request->email)->first();

            // Verify user or super and create token accordingly
            if ($super && Hash::check($request->password, $super->password)) {
                $token = $super->createToken('SuperToken')->plainTextToken;
                return response()->json(['status' => true, 'message' => 'Super logged in successfully', 'super' => $super, 'token' => $token], 200);
            }

            return response()->json(['status' => false, 'message' => 'Credentials do not match our records.'], 401);
        }

}
