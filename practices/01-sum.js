// // Bài 1: Tính S(n) = 1 + 2 + 3 + … + n
// S(n) = 1 + 2 + 3 + … + n = n * (n + 1) / 2
// ver1
export function calcS(n) {
	if (n <= 0) return 0;

	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}

	return sum;
}

// ver2
export function calcSv2(n) {
	if (n <= 0) return 0;

	return (n * (n + 1)) / 2;
}
