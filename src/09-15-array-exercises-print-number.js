// Part 9 lesson 15: Array Excercise 1: Print number
// Print numbers: 1 -> 10
function printNumbers() {
	for (let i = 1; i <= 10; i++) {
		console.log(i);
	}
}
printNumbers();

// Print even numbers
// version 1: Run through odd numbers
function printEvenNumbers() {
	for (let i = 2; i <= 10; i++) {
		if (i % 2 === 0) console.log(i);
	}
}
printEvenNumbers();

// version 2: Don't run through odd numbers
function printEvenNumbers() {
	for (let i = 2; i <= 10; i += 2) {
		console.log(i);
	}
}
printEvenNumbers();

// Print even numbers but less than n
function printEvenNumbersN(n) {
	if (n < 2) return;

	for (let i = 2; i < n; i += 2) {
		console.log(i);
	}
}
printEvenNumbersN(20);
