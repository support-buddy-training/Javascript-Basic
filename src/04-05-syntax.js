// Part 4 lesson 5: Syntax
// Printed to the cosole the message "Welcome to Javascript" and only developers can see
console.log('Welcome to Javascript');

// This is a comment, which is not excuted

// Conditional statement
const isCovid = true;
if (isCovid) {
	console.log('Stay home');
} else {
	console.log('Go ahead');
}

// Conditional statement with pre-defined value
const month = 1;
switch (month) {
	case 1:
		console.log('Jan');
		break;

	case 2:
		console.log('Feb');
		break;

	default:
		console.log('N/A');
}

// Loop
for (let i = 0; i <= 10; i++) {
	console.log(i);
}

// A function in Javascript
function sayHello(name) {
	console.log('Welcome', name);
}
sayHello('my friend');
