// Tính S(n) = 1 + 2 + 3 + ... + n

// Using math
function calculateS(n) {
	if (n <= 0) return 0;

	return (n * (n + 1)) / 2;
}

// Using loop
function calculateS(n) {
	if (n <= 0) return 0;

	let sum = 0;
	for (let i = 0; i <= n; i++) {
		sum += i;
	}
	return sum;
}

// Curcusion
function calculateS(n) {
	// base case
	if (n <= 0) return 0;

	// tail recursion
	return n + calculateS(n - 1);
}
console.log(calculateS(5)); // 5 + S(4) = 5 + 10 = 15
// 4 + S(3) = 4 + 6 = 10
// 3 + S(2) = 3 + 3 = 6
// 2 + S(2) = 2 + 1 = 3
// 1 + S(0) = 1 + 0 = 1
// S(0) = 0 BASE CASE/ Termination
