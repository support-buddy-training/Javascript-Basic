// Part 5 lesson 4: Logical operatiors
// Xét một số điều kiện:

// Nếu là số dương thì…
function checkNumber(n) {
	if (n > 0) {
	}
}

// Nếu là số dương chẵn thì…
function checkNumber2(n) {
	if (n > 0 && n % 2 === 0) {
	}
}

// Nếu là số dương chẵn và lớn hơn 10 thì…
function checkNumber3(n) {
	if (n > 0 && n % 2 === 0 && n > 10) {
	}
}

// Nếu là số dương chẵn chia hết cho 5 và lớn hơn 10 thì…
function checkNumber4(n) {
	if (n > 0 && n % 2 === 0 && n % 5 === 0 && n > 10) {
	}
}

// Nếu là số dương chẵn hoặc lẻ thì…
function checkNumber5(n) {
	if ((n > 0 && n % 2 === 0) || (n > 0 && n % 2 !== 0)) {
	}
}
