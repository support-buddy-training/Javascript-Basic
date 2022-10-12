// Part 5 lesson 8: Excercise if...else 1
// Write a function to check if a number positive even number
// If yes, return true. Otherwise return true

// flag
function isPositiveEventNumber(n) {
	let isValid; // undefined

	// checking ...
	if (n > 0 && n % 2 == 0) {
		isValid = true;
	} else {
		isValid = false;
	}

	return isValid;
}
console.log(isPositiveEventNumber(5));

// version 2
function isPositiveEventNumber(n) {
	let isValid = false; // undefined

	// checking ...
	if (n > 0 && n % 2 == 0) {
		isValid = true;
	}

	return isValid;
}

// vesion 3
function isPositiveEventNumber(n) {
	if (n > 0 && n % 2 == 0) {
		return true;
	}

	return false;
}

// vesion 4
function isPositiveEventNumber(n) {
	return n > 0 && n % 2 == 0;
}
