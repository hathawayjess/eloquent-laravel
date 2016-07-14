<?php namespace App\Http\Controllers;

use App\Bear;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Request;
use View;

class BearController extends Controller {

	public function bear() 
	{
		return View::make('eloquent')

		->with('bears', Bear::all());
	}

}
