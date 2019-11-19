<?php

namespace App\Http\Controllers;

use App\SellerType;
use Illuminate\Http\Request;

class SellerTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SellerType::all();
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SellerType  $sellerType
     * @return \Illuminate\Http\Response
     */
    public function show(SellerType $sellerType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SellerType  $sellerType
     * @return \Illuminate\Http\Response
     */
    public function edit(SellerType $sellerType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SellerType  $sellerType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SellerType $sellerType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SellerType  $sellerType
     * @return \Illuminate\Http\Response
     */
    public function destroy(SellerType $sellerType)
    {
        //
    }
}
