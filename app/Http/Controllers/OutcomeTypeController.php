<?php

namespace App\Http\Controllers;

use App\OutcomeType;
use Illuminate\Http\Request;

class OutcomeTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return OutcomeType::all();
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
        return OutcomeType::updateOrCreate([
            'id' => $request->input('id')
        ], $request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\OutcomeType  $OutcomeType
     * @return \Illuminate\Http\Response
     */
    public function show(OutcomeType $OutcomeType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OutcomeType  $OutcomeType
     * @return \Illuminate\Http\Response
     */
    public function edit(OutcomeType $OutcomeType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OutcomeType  $OutcomeType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OutcomeType $OutcomeType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OutcomeType  $OutcomeType
     * @return \Illuminate\Http\Response
     */
    public function destroy($OutcomeType)
    {
        OutcomeType::find($OutcomeType)->delete();
    }
}
