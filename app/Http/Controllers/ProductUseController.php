<?php

namespace App\Http\Controllers;

use App\ProductUse;
use Illuminate\Http\Request;

class ProductUseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ProductUse::all();
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
        return ProductUse::updateOrCreate([
            'id' => $request->input('id')
        ], $request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ProductUse  $productUse
     * @return \Illuminate\Http\Response
     */
    public function show(ProductUse $productUse)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ProductUse  $productUse
     * @return \Illuminate\Http\Response
     */
    public function edit(ProductUse $productUse)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ProductUse  $productUse
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProductUse $productUse)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ProductUse  $productUse
     * @return \Illuminate\Http\Response
     */
    public function destroy($productUse)
    {
        ProductUse::find($productUse)->delete();
    }
}
