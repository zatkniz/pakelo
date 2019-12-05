<?php

namespace App\Http\Controllers;

use App\Order;
use App\OrderProduct;
use Illuminate\Http\Request;
use Auth;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $query = Order::whereIsOffer($request->input('orders') == 'true' ? true : false);

        if ($request->input('user') != null) {
            $query->where('user_id', $request->input('user'));
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

        return $query->get();
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

        $order = Order::updateOrCreate(
            [
                'id' => $request->input('id')
            ],
            $request->all()
        );

        $order->products()->delete();

        foreach ($request->input('products') as $key => $prod) {
            $product = new OrderProduct(
                [
                    'order_id' => $order->id,
                    'price' => $prod['price'],
                    'product_id' => $prod['product']['id'],
                    'quantity' => $prod['quantity'],
                ]
            );

            $order->products()->save($product);
        }

        return $order;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        return $order;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        $order->delete();
    }
}
