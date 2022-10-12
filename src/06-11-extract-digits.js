// Part 6 lesson 11: Extract digits from numbers

// Get the ones of a number having 3 digits
function getOnes(n) {
	if (n.toString().length !== 3) return -1;

	return n % 10;
}
console.log(getOnes(123));
console.log(getOnes(1234));

// Get the tens of a number having 3 digits
function getTens(n) {
	if (n.toString().length !== 3) return -1;

	return Math.trunc((n % 100) / 10);
}
console.log(getTens(123));
console.log(getTens(1234));

// Get the hundreds of a number having 3 digits
function getHundered(n) {
	if (n.toString().length !== 3) return -1;

	return Math.trunc(n / 100);
}
console.log(getHundered(123));
console.log(getHundered(1234));

// Sum all digits of number having 3 digits
function sumdigits(n) {
	if (n.toString().length !== 3) return -1;

	return (n % 10) + Math.trunc((n % 100) / 10) + Math.trunc(n / 100);
}
console.log(sumdigits(123));
console.log(sumdigits(235));
