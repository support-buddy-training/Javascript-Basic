//  Part 7 lesson 7: Capitalize

// Write a function to transform a string:
// First letter upscase
//  Rest lower case
// toLowerCase/ toUpperCase

function capitalize(str) {
	if (str === '') return '';

	const firstletter = str[0].toUpperCase();
	const rest = str.slice(1).toLowerCase();
	return `${firstletter}${rest}`;
}
console.log(capitalize(''));
console.log(capitalize('abc'));
console.log(capitalize('aBC'));
console.log(capitalize('Abc'));
