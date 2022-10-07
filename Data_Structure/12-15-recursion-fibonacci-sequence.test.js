// loop
function fibonacciLoop(n) {
	if (n <= 0) return 0;
	if (n === 1) return 1;

	let prev = 0;
	let curr = 1;
	let next = 1;
	let i = 2;
	while (i <= n) {
		next = prev + curr;

		// move foward
		i++;
		prev = curr;
		curr = next;
	}

	return next;
}

// recursion
function fibonacci(n) {
	if (n <= 0) return 0;
	if (n === 1) return 1;

	// de quy nhi phan: goi lai hai lan
	return fibonacci(n - 1) + fibonacci(n - 2);
}

describe('fibonacciLoop(n)', () => {
	it('should return correct fibonacci number', () => {
		[0, 1, 1, 2, 3, 5, 8, 13, 21, 34].forEach((result, n) => {
			expect(fibonacciLoop(n)).toBe(result);
		});
	});
});

describe('fibonacci(n)', () => {
	it('should return correct fibonacci number', () => {
		[0, 1, 1, 2, 3, 5, 8, 13, 21, 34].forEach((result, n) => {
			expect(fibonacci(n)).toBe(result);
		});
	});
});
