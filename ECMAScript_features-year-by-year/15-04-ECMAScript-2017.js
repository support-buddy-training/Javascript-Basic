// MAJOR Async functions
// Before 2017
function main() {
	getAllStudents()
		.then((response) => {
			const { data, pagination } = response;
			console.log(data, pagination);
		})

		.catch((error) => {
			console.log(error);
		});
}
// 2017
async function main() {
	try {
		const response = await getAllStudents();
		console.log(data, pagination);
	} catch (error) {
		console.log(error);
	}
}

// String padding
console.log('12345'.padStart(8)); //    12345
console.log('12345'.padStart(8, '*')); // ***12345
console.log('123456'.padStart(8, '*')); // **123456
console.log('12'.padStart(8, '*')); // ******12
console.log('123'.padStart(8, '*')); // *****123
console.log('1234'.padStart(8, '*')); // ****1234

console.log('12345'.padEnd(8)); // 12345
console.log('12345'.padEnd(8, '*')); // 12345***
console.log('123456'.padEnd(8, '*')); // 123456**
console.log('12'.padEnd(8, '*')); // 12******
console.log('123'.padEnd(8, '*')); // 123*****
console.log('1234'.padEnd(8, '*')); // 1234****

// Object.values()
console.log(
	Object.values({
		id: 1,
		name: 'Hello',
		age: '20',
	})
); // [ 1, 'Hello', '20' ]
// Object.keys()
console.log(
	Object.keys({
		id: 1,
		name: 'Hello',
		age: '20',
	})
); // [ 'id', 'name', 'age' ]
// Object.entries()
console.log(
	Object.entries({
		id: 1,
		name: 'Hello',
		age: '20',
	})
); // [ [ 'id', 1 ], [ 'name', 'Hello' ], [ 'age', '20' ] ]

// Object.getOwnPropertyDescriptors()
const student = { id: 1, name: 'Hello' };
console.log(Object.getOwnPropertyDescriptors(student));
// {
//   id: { value: 1, writable: true, enumerable: true, configurable: true },
//   name: {
//     value: 'Hello',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }

// Trailing commas in function parameter lists and calls
// Trailing commas in Array
console.log([1, 2, 3, ,].length); // 4
console.log([1, 2, 3, , , , , , , , , , , , ,].length); // 15
// Trailing commas in object (from ECMAScript 5)
const people = {
	id: 1,
	name: 'Hello',
	age: 20, // <-- trailing comma
};
// Trailing commas in functions (from ECMAScript 2017)
// function declaration
function createStudent({
	id,
	name,
	age,
	hobbies,
	isHero, // <-- is comma
}) {
	console.log(id, name, age, hobbies, isHero);
}
// function call
createStudent({
	id: 1,
	name: 'Hello',
	age: 20,
	hobbies: ['music', 'coding'],
	isHero: false, // <-- trailing comma
}); // 1 Hello 20 [ 'music', 'coding' ] false
