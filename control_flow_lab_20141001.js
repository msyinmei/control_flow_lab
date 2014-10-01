// //If/else lab
// var food = ["potatoes","apples"];
// 	if(food.length ===0) {
// 		console.log("You have no food");
// 	} else if (food.length == 1) {
// 		console.log("You have one food");
// 	} else {
// 		console.log("You have lots of food");
// 	}

// //While lab
// var numBeer = 99;
// while (numBeer>1){
// 	console.log ( numBeer + " bottles of beer on the wall, " + numBeer + " bottles of beer. Take one down, pass it around, " + (numBeer-1) + " bottles of beer on the wall...");
// 	numBeer--;
// }
// if(numBeer===1){
// 		console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down, pass it around, no more bottles of beer on the wall...");
// 	}

// //For lab
// var favPeeps = ["Timmy", "Tommy", "Tammy"];
// for (var index in favPeeps){
// 	console.log("Hello, " + favPeeps[index] + "!");
// }

//For Bonus lab
var favPeeps = ["Timmy", "Tommy", "Tammy"];
for (var index in favPeeps){
	console.log(favPeeps[index] + " says Hello, "+ favPeeps[(index+1)]+"!");
	console.log(favPeeps[(index+1)] + " says \'Hello\' back,"+ favPeeps[index]);
}