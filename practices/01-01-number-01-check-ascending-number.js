// Part 11 lesson 4: Exercise 01: Check ascending number
// 1. Create function isIncreasingNumber(n) to check n check if n is an incrementing number
// 2. Rule
// 0 < n < 1000000
// n is an increasing number with at least 2 digits
// the right digit is always greater than the left digit
// retun true if is a increasing number, otherwise return false
// Ex: isIncreasingNumber(12345) -> true
// Ex: isIncreasingNumber(12345123) -> false

// Ver1: extract digit then compare (trich xuat chu so roi so sanh)
// ex: n = 123 --> cho prevDigit = 10
// last digit = n % 10 = 3
// n / 10 = 12.3 --> Math.trunc(12.3) = 12 (lay phan nguyen) --> n = 12
// Math.trunc(n / 10) --> remove the last digit
// export function isIncreasingNumber(n) {
// 	if (n < 10 || n > 1000000) return false;

// 	let remaining = n;
// 	let prevDigit = 10;

// 	// Dung while khi so lan lap khong xac dinh, khi nao con thao dieu kien thi van chay
// 	while (remaining > 0) {
// 		// if found an ivalid case return false
// 		const lastDigit = remaining % 10;
// 		if (lastDigit >= prevDigit) return false;

// 		// update prevDigit to lastDigit
// 		prevDigit = lastDigit;

// 		// update condition
// 		remaining = Math.trunc(remaining / 10);
// 	}

// 	return true;
// }

// // Ver2: convert to string then compare (chuyen sang string roi so sanh)
// export function isIncreasingNumber(n) {
// 	if (n < 10 || n > 1000000) return false;

// 	const numberString = n.toString();
// 	for (let i = 1; i < numberString.length; i++) {
// 		if (numberString[i] <= numberString[i - 1]) return false;
// 	}

// 	return true;
// }

// version 1: extract digit then compare
// export function isIncreasingNumber(n) {
// 	if (n < 10 || n > 1000000) return false;

// 	// Goi so can tach la remaining, so can tach ban dau la n
// 	let remaining = n;
// 	// Goi so dau tien de so sanh tinh tu phai qua la prevDigit. Ban dau so cuoi cung ben phai (so dau tien can tach) khong co so so sanh, nen tu cho prevDigit = 10
// 	let prevDigit = 10;

// 	// Dung vong lap while de lap va kiem tra xem n co phai la so tang dan khong
// 	while (remaining > 0) {
// 		// if found invalid case return false (neu tim thay mot truong hop invalid tra ve false)
// 		const lastDigit = remaining % 10;
// 		if (lastDigit >= prevDigit) return false;

// 		// update lastDigit
// 		prevDigit = lastDigit;

// 		// update reamaining
// 		remaining = Math.trunc(remaining / 10);
// 	}

// 	return true;
// }

// Ex: 12345-prevDigit(10)
// version 1: extract digit then compare
export function isIncreasingNumber(n) {
	if (n < 10 || n > 1000000) return false;

	let reamaining = n;
	let prevDigit = 10;

	while (reamaining > 0) {
		// neu tim thay mot truong hop invalid thi tra ve false
		const lastDigit = reamaining % 10; // -> 5 4 3 2 1
		if (lastDigit >= prevDigit) return false; // next next

		// update lastDigit
		prevDigit = lastDigit; // 5 4 3 2 1

		// update last is remaining
		reamaining = Math.trunc(reamaining / 10); // 1234(,5) 123(,4) 12(,3) 1(,2) 0
	}

	return true;
}

export function isIncreasingNumber2(n) {
	if (n < 10 || n > 1000000) return false;

	const numberString = n.toString();
	for (let i = 1; i < numberString.length; i++) {
		if (numberString[i] <= numberString[i - 1]) return false;
	}

	return true;
}
