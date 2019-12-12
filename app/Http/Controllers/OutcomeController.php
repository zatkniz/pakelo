<?php

namespace App\Http\Controllers;

use App\Outcome;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OutcomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Outcome::query();

        if ($request->input('user') != null) {
            $query->where('user_id', $request->input('user'));
        }
        
        if ($request->input('outcome_type_id') != null) {
            $query->where('outcome_type_id', $request->input('outcome_type_id'));
        }

        if (explode(',', $request->input('date'))[0]) {
            $query->where('created_at', '>=', explode(',', $request->input('date'))[0]);
        }

        if (explode(',', $request->input('date'))[1]) {
            $query->whereDay('created_at', '<=', explode('-', explode(',', $request->input('date'))[1])[2])->whereMonth('created_at', '<=', explode('-', explode(',', $request->input('date'))[1])[1])->whereYear('created_at', '<=', explode('-', explode(',', $request->input('date'))[1])[0]);
        }

        if ($request->input('customer') != 'undefined') {
            $query->where('customer_id', $request->input('customer'));
        }

        return $query->with(['type', 'user'])->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (!$request->input('id')) {
            $request['user_id'] = Auth::user()->id;
        }

        return Outcome::updateOrCreate([
            'id' => $request->input('id')
        ], $request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Outcome  $Outcome
     * @return \Illuminate\Http\Response
     */
    public function show(Outcome $Outcome)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Outcome  $Outcome
     * @return \Illuminate\Http\Response
     */
    public function edit(Outcome $Outcome)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Outcome  $Outcome
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Outcome $Outcome)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Outcome  $Outcome
     * @return \Illuminate\Http\Response
     */
    public function destroy($Outcome)
    {
        Outcome::find($Outcome)->delete();
    }
}
