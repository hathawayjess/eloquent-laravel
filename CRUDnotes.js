//CREATING RECORDS

	//create and save at the same time
	Bear::create(array(

		'name'          => 'Super Cool',
		'type'          => 'Black',
		'danger_level'  => 1
	));

	//or you can create an object and assign values

	$bear               = new Bear;

	$bear->name         = 'Super Cool';
	$bear->type         = 'Black';
	$bear->danger_level = 1;

	//save bear to database
	$bear->save();


//OTHER CREATE OPTIONS

	//find the bear or create it into the database
	Bear::firstOrCreate(array('name' => 'Lawly'));

	//find the bear or instantiate a new instance into the object we want
	$bear = Bear::firstOrNew(array('name' => 'Cerms'));


/**************************************************************************************/

//GETTING AND FINDING RECORDS

	//get all bears
	$bears = Bear::all();

	//find specific bear by id
	$bears = Bear::find(1);

	//find by specific attribute
	$bearLawly = Bear::where('name', '=', 'Lawly')->first();

	//find bear with danger level greater than 5
	$dangerousBears = Bear::where('danger_level', '>', 5)->get();

	//first() will return only one record, get() will return an array of records to loop over



/****************************************************************************************/

//UPDATING RECORDS

	//find the bear
	$lawly = Bear::where('name', '=', 'Lawly')->first();

	//change the attribute
	$lawly->danger_level = 10;

	//save to our database
	$lawly->save();


/****************************************************************************************/

//DELETING RECORDS

	//find and delete record
	$bear = Bear::find(1);
	$bear->delete();

	//delete a record
	Bear::destroy(1);

	//delete multiple records
	Bear::destroy(1, 2, 3);

	//find and delete all bears with danger level over 5
	Bear::where('danger_level', '>', 5)->delete();