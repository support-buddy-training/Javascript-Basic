// Part 7 lesson 8: Includes Excercise

// Check if a string contains an email adderess with '@gmail.com' or not
// indexOf/ lastIndexOf/ includes

// includes
function hasEmail(str) {
	return str.includes('@gmail.com');
}
console.log(hasEmail('abc abc@gmail.com def'));

// indexOf: return index the first string
function hasEmail(str) {
	return str.indexOf('@gmail.com') >= 0;
}
console.log(hasEmail('abc abc@gmail.com def'));

// lastIndexOf: return index the last string
function hasEmail(str) {
	return str.lastIndexOf('@gmail.com') >= 0;
}
console.log(hasEmail('abc abc@gmail.com def'));
