<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Categorie;
use Illuminate\Support\Facades\Validator;

class CategorieController extends Controller
{
    //
    public function index()
    {
        $restos = Categorie::with('resto')->get();
          // Check if the collection is empty
        if ($restos->isEmpty()) {
            return response()->json(['message' => 'No Categories found'], 404);
        }

        return response()->json($restos);
    }

    public function store(Request $request)
    {
        try{
            $validator = Validator::make($request->all(), [
                'name' => 'nullable|string|max:255',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
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

                   // Check if the request contains an image
        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            // Generate a unique file name
            $imageName = time().'.'.$request->image->extension();
            // Store the image in the default storage disk (usually 'public')
            $request->image->storeAs('images', $imageName);
            // Update the 'image' field in the validated data to store the path
            $validated['image'] = 'images/' . $imageName;
        }
            $staff = Categorie::create($validated);
    
            return response()->json([
                'status' => true,
                'message' => 'Category Created Successfully',
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
        $staff = Categorie::with('resto')->find($id);

        if (!$staff) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        return response()->json($staff);
    }

    public function update(Request $request, $id)
    {
        $staff = Categorie::find($id);

        if (!$staff) {
            return response()->json(['message' => 'Category not found'], 404);
        }


        $staff->update($request->all());

        return response()->json(
            [
                'Status' => true,
                'message' => 'Categorie updated successfully', 
                'data' => $staff]
        );
    }

    public function destroy($id)
    {
        $staff = Staff::find($id);

        if (!$staff) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        $staff->delete();

        return response()->json(['Status' => true,'message' => 'Category deleted successfully']);
    }
}
