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



	/**first() will return only one record, get() will return an array of records to loop over**/



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



/*****************************************************************************************/

//QUERYING RELATIONSHIPS

	/***ONE-TO-ONE***/

		//find a bear named Adobot
		$adobot = Bear::where('name', '=', 'Adobot')->first();

		//get the fish that Adobot has
		$fish = $adobot->fish;

		//get the weight of the fish Adobot is going to eat
		$fish->weight;

		//alternatively you could go straight to the weight attribute
		$adobot->fish->weight;



	/***ONE-TO-MANY***/

		//find the trees lawly climbs
		$lawly = Bear::where('name', '=', 'Lawly')->first();

		//find the trees and their type and age
		foreach ($lawly->trees as $tree)
			echo $tree->type . ' ' . $tree->age;



	/***MANY-TO-MANY***/


		//get the picnics that Cerms goes to
		$cerms = Bear::where('name', '=', 'Cerms')->first();

		//get the picnics and their names/taste levels
		foreach ($cerms->picnics as $picnic)
			echo $picnic->name . ' ' . $picnic->taste_level;



		//get the bears that go to the Grand Canyon picnic
		$grandCanyon = Picnic::where('name', '=', 'Grand Canyon')->first();

		//show the bears
		foreach ($grandCanyon->bears as $bear)
			echo $bear->name . ' ' . $bear->type . ' ' . $bear->danger_level;