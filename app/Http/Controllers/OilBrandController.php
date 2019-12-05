<?php

namespace App\Http\Controllers;

use App\OilBrand;
use Illuminate\Http\Request;

class OilBrandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return OilBrand::all();
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
        return OilBrand::updateOrCreate([
            'id' => $request->input('id')
        ], $request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\OilBrand  $oilBrand
     * @return \Illuminate\Http\Response
     */
    public function show(OilBrand $oilBrand)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OilBrand  $oilBrand
     * @return \Illuminate\Http\Response
     */
    public function edit(OilBrand $oilBrand)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OilBrand  $oilBrand
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OilBrand $oilBrand)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OilBrand  $oilBrand
     * @return \Illuminate\Http\Response
     */
    public function destroy(OilBrand $oilBrand)
    {
        OilBrand::find($OilBrand)->delete();
    }
}
