// default parameter value
// move default param to the right most

function sum(a, b) {}
function sum(a, b = 10) {}
function sum(a = 5, b = 10) {}

function sum(a = 5, b = 10) {
	console.log(a + b);
	return a + b;
}

sum();
sum(10);
sum(10, 20);

sum(undefined, undefined);
sum(undefined, null); // null duoc chuyen ve so 0 de tinh toan

// rest
// es5
function sum() {
	let sum = 0;

	// for (let i = 0; i < arguments.length; i++) {
	// 	sum += arguments[i];
	// }

	// return sum;

	// chuyen doi ve array va tinh toan
	// Array.from(arguments);
	return [...arguments].reduce((total, number) => total + number);
}

console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));

// es6
function sum(...numberList) {
	// rest // group
	let sum = 0;

	return [...numberList].reduce((total, number) => total + number, 0);
}

console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));

// them name
function sum(name, ...numberList) {
	let sum = 0;

	console.log(name);
	return numberList.reduce((total, number) => total + number, 0);
}

console.log(sum('sum 1', 1));
console.log(sum('sum 2', 1, 2));
console.log(sum('sum 3', 1, 2, 3));

// spread
function sum(name, ...numberList) {
	let sum = 0;

	console.log(name);
	return numberList.reduce((total, number) => total + number, 0);
}

// console.log(sum('sum 1', 1));
// console.log(sum('sum 2', 1, 2));
// console.log(sum('sum 3', 1, 2, 3));

const numberList = [2, 4, 6]; //
console.log(sum(...numberList)); // spread / expand - tach [2, 4, 6] thanh danh sach cac phan tu 2, 4, 6

// function sum() {} // function declartion
// const sum = function () {}; // function expression
// const sum = () => {}; // arrow function

// arrow function
const sum = (a, b) => {
	return a + b;
};

// short hand
const sum = (a, b) => a + b;

// return ve object
const getStudent = () => {
	return { name: 'Hello' };
};

const getStudent1 = () => ({
	name: 'Hello',
});
console.log(getStudent1());

// curry function

function sum(x) {
	return function (y) {
		return x + y;
	};
}
console.log(sum(1)(2));

// ket hop curry function va clouser de tao ra mot idGenerator - mot danh sach gom id tang dan
function creteIdGenerator(startId) {
	let id = startId;

	return function () {
		console.log(id);
		return id++;
	};
}

const getNextId = creteIdGenerator(10);
getNextId();
getNextId();
getNextId();
getNextId();
