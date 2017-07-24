var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
  
  var collection = db.collection('restaurants');
  
  
  /*
	var specificName = prompt("Type specific and press enter to display restaurant with name: ");
	var yelpChoice = prompt("Type a yelp address: ");	
	collection.insert({
	  "name": specificName,
	  "yelp":yelpChoice
	});
  */
  /*
  var restaurantToEdit = prompt("Type name of restaurant to edit: ");
  var nameToGiveRestaurant = prompt("Type new name of restaurant: ");
  collection.update({"name": restaurantToEdit}, {$set: { "name": nameToGiveRestaurant}});
  
  */

  var restaurantToDelete = prompt("Type name of restaurant to delete: ");
  collection.remove({"name": restaurantToDelete}, {"justOne": true});

  var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  if(allChoice == "all"){
    collection.find().toArray(function(err, doc){
      console.log(doc);
    });
  } else {
    console.log("Aw, you don't want to see the restaurants?");
  }
});
