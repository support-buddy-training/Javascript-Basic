// Part 11 lesson 4: Exercise 01: Check decreasing number

export function isDecreasingNumber(n) {
	if (n < 10 || n > 1000000) return false;

	let remaining = n;
	let prevDigit = -1;

	while (remaining > 0) {
		const lastDigit = remaining % 10;
		if (lastDigit <= prevDigit) return false;

		prevDigit = lastDigit;

		return (remaining = Math.trunc(remaining / 10));
	}

	return true;
}

export function isDecreasingNumber2(n) {
	if (n < 10 || n > 1000000) return false;

	const numberString = n.toString();
	for (let i = 1; i < n.length; i++) {
		if (numberString[i] >= numberString[i - 1]) return false;
	}

	return true;
}
