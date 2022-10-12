// Part 6 lesson 9: Check number type

//  Function to check if a number is odd/even
function isEven(n) {
	return n % 2 === 0;
}

function isOdd(n) {
	return n % 2 !== 0;
	// return n%2 === 1;
}

//  function to check if a number is divisible by 5
function isDivisibleBy5(n) {
	return n % 5 === 0;
}

//  function to check if a number is perfect square
function isPerfectSquare(n) {
	if (n <= 0) return false;

	const sqrtN = Math.sqrt(n);
	const sqrtNInt = Math.trunc(sqrtN);
	return sqrtNInt * sqrtNInt === n;
}
console.log(isPerfectSquare(20));
console.log(isPerfectSquare(25));
console.log(isPerfectSquare(4));
console.log(isPerfectSquare(7));
console.log(isPerfectSquare(16));
