//alert("JavaScript works!");
// Michael Cothran
// August 12, 2013
// SDI 1308
// The quest begins 


// VARIABLES
	var MainChar = "Rowen",
		magickLevel = 10,
		magickItems = ["amulet!", "black flame candle!", "broom!", "birch wand!"],
		itemSkill = [5, 8, 2, 10] 
		ready = ("\"I need to gather a few supplies from inside.\" "),
		notReady = ("I should put on my cloak and hat.")
		
		
		
		
;	
		
	
// PROCEDURE


var dayOrNight = function(name) {
	var currentHour = (new Date()).getHours(),
		timeOfDay;
	if (currentHour < 12) {
		timeOfDay = "bright";
		}
	else if (currentHour < 17) {
		timeOfDay = "setting";
		}
	else {timeOfDay = "moon";
	}
	console.log(name + " opens the door to the cottage and steps into the " + timeOfDay + " light, and looks around.");
	};

// BOOLEAN FUNCTION

var readyOrNot = function(cloke,hat)
{
	
	if ((cloke===true) && (hat===true))
	{
	var status = true
	return ready;
	}
	else if ((cloke===false) || (hat===false))
	{status = false
	return notReady;
	}
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

var sortBindle = function(b1,b2,b3,b4){
	var White = (" bindle contains Angelica");
	    Red = (" bindle contains Tyme");
	    Brown = (" bindle contains Wolsbain");
	    Black = (" bindle contains Hemlock")
	return b1 +White+", "+
	       b2 +Red+", "+
	       b3 +Brown+", "+
	       b4 +Black;
};


// ARRAY FUNCTION & FOR LOOP

var countItems = function(items, power){
	for (var itemNumber = 0; itemNumber < magickItems.length; itemNumber++) {
		var itemsNeeded = items;
		var itemName = items[itemNumber],
			itemPower = power[itemNumber];
		console.log("Rowen found " + itemName + " with a power level of " + itemPower);
		for (var Power = 0; power<itemPower; power+= 5) {
		var itemsLeft = itemPower - power;
		console.log(power + " with a power of, " + itemsLeft + " power left.");
		}		}
	return itemsNeeded;
	};
	
// MAIN

//Call Procedure
dayOrNight("Rowen");


//Call Boolean
var hereWeGo = readyOrNot(false,true);
	console.log(hereWeGo);
	
	
	console.log("Rowen turns to her shadow.");
	console.log( "\"I need herbs to make potions and some magickal items.\" ")
	console.log("Rowen thinks of the things she will need on her quest. Looking around she finds a shoulder bag and starts to fill it with items she can use in her magick");

//Call Number
var herbsAmount = getHerbs(magickLevel);

	console.log(herbsAmount + " bindles of herbs is all I need for now.");
	console.log("After tying the last bindle closed Rowen writes on a piece of parchment what each bindle contains");

//Call String

var bindles = sortBindle("White","Red","Brown","Black");
	console.log(bindles);
	
	console.log("Rowen has all the herbs she needs to mix potions and cast spells. Now she needs a few Magick items for her journey.");

//Call Array 
var itemsCount = countItems(magickItems,itemSkill);
	console.log("Rowen found " + magickItems.length + " different items.");
	
	console.log("I am ready to finally venture into the woods and travel to the town of Salem");
	console.log("Come shadow we will need to move quietly to avoid the witch hunters in the woods.");
	console.log("I dont want to use magick on mortals but I have enough supplies I can if I have to.");
	console.log("Rowen and her familier dissaper into the dark forest.");
;
//Finish


