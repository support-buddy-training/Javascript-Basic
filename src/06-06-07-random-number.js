// Random number

// Part 6 lesson 6: Random a number in range of [0, n]
function randomNumber(n) {
	// validate args
	if (n <= 0) return -1;

	// processing
	const random = Math.random() * n;
	const result = Math.round(random);

	// return
	return result;
}
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));

// ver 1:
function randomNumber1(n) {
	if (n <= 0) return -1;

	const random = Math.random() * n;
	return Math.round(random);
}
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));

// ver 3
function randomNumber1(n) {
	if (n <= 0) return -1;

	return Math.round(Math.random() * n);
}
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumb1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));
console.log(randomNumber1(3));

// Part 6 lesson 7: Random a number in range of [a, b] with a < b
function radomNumberInrange(a, b) {
	if (a >= b) return -1;

	const random = Math.random() * (b - a);
	return Math.round(random) + a;
}
console.log(radomNumberInrange(1, 5));
console.log(radomNumberInrange(1, 5));
console.log(radomNumberInrange(1, 5));
console.log(radomNumberInrange(1, 5));
console.log(radomNumberInrange(1, 5));
console.log(radomNumberInrange(1, 5));
console.log(radomNumberInrange(1, 5));
console.log(radomNumberInrange(1, 5));
console.log(radomNumberInrange(1, 5));
console.log(radomNumberInrange(1, 5));
console.log(radomNumberInrange(1, 5));
