// UNIQUE CHARS

// Write a function that takes in a single word, as a string. It should return true if that word contains only unique characters. Return False otherwise.

function hasUniqueChars(str) {
	// create a variable to hold evaluated chars while looping

	// convert the string into an array to loop over characters

	// loop over the array and determine
	// if the holder array contains what's being evaluated, then return false
	// if the holder array doesn't contain what's being evaluated, then add this char to the holder array


	// if we make it this far, return true

	const evaluatedChars = [];

	const charArr = str.toLowerCase().split('')
	
	for (let i = 0; i < charArr.length; i++) {
		if(evaluatedChars.includes(charArr[i])) {
			console.log(charArr[i], evaluatedChars)
			return false;
		} else {
			evaluatedChars.push(charArr[i])
		}
	}

	console.log(evaluatedChars)
	return true;
}

// hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False