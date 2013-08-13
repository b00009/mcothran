//alert("JavaScript works!");
// Michael Cothran
// August 12, 2013
// SDI 1308
// The quest begins 


// VARIABLES
	var Main = "Rowen",
		magickLevel = 10,
		magickItems = ["amulet!", "black flame candle!", "broom!", "birch wand!"],
		Herbs = ["Hemlock", "Wolfsbain", "Angelica", "Thyme" ]
	
;	
		
	
// PROCEDURE

var getDayOrNight = function(){
	var currentHour = (new Date()).getHours(), timeOfDay;
	if (7 < currentHour < 19) {timeOfDay = "bright"; }
	else {timeOfDay = "moon"; }
	

	
	console.log("Rowen opens the door to the cottage and steps into the " + timeOfDay + " light, and looks around.");
};	

// BOOLEAN FUNCTION

var isShePrepared = function(cloke, hat){
	if (cloke || hat){
	return("need to gather a few supplies from inside");}
	else {return("feel like I am forgetting something");}
};
	
// NUMBER FUNCTION & WHILE LOOP

var getHerbs = function(count){
	var herbs = count;
	while (count > 0) {
		console.log("Picked an herb.");
		count--;
		};
	return(herbs / 2.5);
};	
	
// STRING FUNCTION WITH CONCATENATION

var sortBindle = function(color,herb){
	var herbSummary = ("The " + color + " bindle " + herb + ".");
	console.log(herbSummary);
};

// ARRAY FUNCTION & FOR LOOP

var countItems = function(){
	for (var i = 0; i < magickItems.length; i++) {
		console.log("I found a " + magickItems [i]);
		};
		return magickItems.length;
	};
	
// MAIN

getDayOrNight();

var isShePrepared = isShePrepared(true,true);
	console.log("I " + isShePrepared + ".");
	
console.log("Rowen turns to her shadow.");
console.log( "\"I need herbs to make potions and some magickal items.\" ")
console.log("Rowen thinks of the things she will need on her quest. Looking around she finds a shoulder bag and starts to fill it with items she can use in her magick");

var herbsAmount = getHerbs(magickLevel);

console.log(herbsAmount + " bindles of herbs is all I need for now.");
console.log("After tying the last bindle closed Rowen writes on a piece of parchment what each bindle contains");

sortBindle("white", "Angelica");
sortBindle("red", "Thyme");
sortBindle("brown", "Wolfsbain");
sortBindle("black", "Hemlock");

console.log("Rowen has all the herbs she needs to mix potions and cast spells. Now she needs a few Magick items for her journey.");

var magickItems = countItems();
	console.log("Rowen found " + magickItems + " different items.");
	
	console.log("I am ready to finally venture into the woods and travel to the town of Salem");
	console.log("Come shadow we will need to move quietly to avoid the witch hunters in the woods.");
	console.log("I dont want to use magick on mortals but I have enough supplies I can if I have to.");
	console.log("Rowen and her familier dissaper into the dark forest.");
	;


