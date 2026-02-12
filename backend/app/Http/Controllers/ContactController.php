<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        return ['status' => 'ok', 'data' => Contact::latest()->get()];
    }

    public function store(Request $req)
    {
        $input = $req->validate([
            'name' => 'required|min:3',
            'email' => 'required|email',
            'phone' => 'required',
            'message' => 'required|min:10',
        ]);

        try {
            $newContact = Contact::create($input);

            return response()->json([
                'success' => true,
                'id' => $newContact->id,
                'msg' => 'Saved!'
            ], 201);

        } catch (\Exception $e) {
            return response()->json(['error' => 'Server error'], 500);
        }
    }
}