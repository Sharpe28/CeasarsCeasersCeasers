// var cypheredCopy = "";
// var original = "TeleTubbies";
// var shiftAmount = 6;
// var counter = 0
	
// 	for(counter = 0; counter < 12; counter++){
// 		cypheredCopy[counter] = original[counter] + shiftAmount; 
// 	}

var caesarShift = function(){

	var myString = "HELLO"
	var shifter = 14;
	var cipherString = "";
	var numberTracker = 0;

	for(var numberTracker = 0; numberTracker < 5; numberTracker++){

		// cipherString[numberTracker] = myString[numberTracker] + shifter;

		var x = '';
		var asciiCode = myString.charCodeAt(numberTracker);

		x = String.fromCharCode((asciiCode - 65 + shifter) + 65);
		cipherString += x;
	}
	return cipherString;
}

document.getElementById("demo").innerHTML = window.caesarShift();