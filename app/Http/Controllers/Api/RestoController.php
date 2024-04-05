<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Resto;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str; // Make sure to import the Str facade

class RestoController extends Controller
{
    //
    public function index()
    {
        $restos = Resto::with('user')->get();
          // Check if the collection is empty
        if ($restos->isEmpty()) {
            return response()->json(['message' => 'No restaurants found'], 404);
        }

        return response()->json($restos);
    }

    // Store a newly created resource in storage.
    public function store(Request $request)
    {
        $rules = [
            'name' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255',
            'user_id' => 'nullable|exists:users,id'
        ];
        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
    
        // If validation passes, create the Resto
        $resto = Resto::create($validator->validated());
    
        return response()->json($resto, 201);
    }

    // Display the specified resource.
    public function show(Resto $resto)
    {
        return response()->json($resto);
    }

    public function update(Request $request, Resto $resto)
    {
        // Validation rules (optional but recommended)
        $rules = [
            'name' => 'sometimes|required|string|max:255',
            'slug' => 'nullable|string|max:255',
            'user_id' => 'nullable|exists:users,id'
        ];
    
        // Validate the request
        $validator = Validator::make($request->all(), $rules);
    
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
    
        // Check if name is being updated and generate a new slug
        if ($request->has('name')) {
            $resto->slug = Str::slug($request->name);
        }
    
        // Update the resto with the validated data
        $resto->update($validator->validated());
    
        return response()->json($resto);
    }
    // Remove the specified resource from storage.
    public function destroy(Resto $resto)
    {
        $resto->delete();
        return response()->json(['message' => 'Restaurant deleted successfully']);

    }
}
