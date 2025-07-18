<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/engineering/', function () {
    return view('engineering');
});

Route::get('/drafting', function () {
    return view('drafting');
});
Route::get('/procurement', function () {
    return view('procurement');
});
Route::get('/about', function () {
    return view('about');
});
// Route::get('/gallery', function () {
//     return view('/gallery');
// });

Route::get('/gallery', function () {
    if (!request()->has('filter')) {
        return redirect('/gallery/?filter=all');
    }
    $filter = request()->query('filter', 'all');
    return view('gallery', ['filter' => $filter]);
});


Route::get('/quote', function () {
    return view('quote');
});
Route::get('/contact', function () {
    return view('contact');
});
// Route::get('/technology', function () {
//     return view('technology');
// });
Route::get('/careers', function () {
    return view('careers');
});

