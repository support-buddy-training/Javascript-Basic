// Property shorthand
// no shorthand
const id = 1;
const name = 'Hello';
const age = 18;

const student = {
	id: id,
	name: name,
	age: age,
	isHero: false,
};

console.log(student);

// property shorthand
const student1 = {
	id,
	name,
	age,
	isHero: false,
};
console.log(student1);

// Computed property name
const key = 'Hello';

const student2 = {
	id: 1,
	name: 'Easy',

	'hero type': 'iron man', // key with spaces

	[key]: 50, // lay gia tri cua bien key lam ten key -> [key]: 50, <==> 'Hello': 50,

	[`get${key}`]: function () {
		return 100;
	},
};

console.log(student2.id); // 1
console.log(student2.Hello); // 50

console.log(student2['hero type']); // goi key co spaces
// iron man

console.log(student2.getHello()); // 100

// Method Property

const student3 = {
	sayHello: function () {
		console.log('Hello');
	}, // ES5

	getHello() {
		console.log('Hello');
		return;
	}, // ES6
};

student3.sayHello();
student3.getHello();

// Desctructuring
// Object
const student4 = {
	id4: 4,
	name4: 'Hello4',
};

const { id4, name4 } = student4;
console.log({ id4, name4 }); // { id4: 4, name4: 'Hello4' }

// Array:
const numberList = [15, 20, 30];
const [a, b] = numberList;

console.log([a, b]); // [ 15, 20 ]

// Swap:
let x = 10;
let y = 20;

[y, x] = [x, y];

console.log(x);
console.log(y);

// rename props use desctructuring value;
const studentRename = {
	id0: 0,
	name0: 'Hello',
};

const { id0: studentRenameId, name0, age0 = 18 } = studentRename;
console.log(studentRenameId); // 0
console.log(age0); // 18 // age0 = 18 la gia tri mac dinh neu undefined, khong co trong object

// console.log(id0); // id0 is not defined
console.log(studentRename); // { id0: 0, name0: 'Hello' }
console.log(studentRename.studentRenameId); // undefined

// Object.assign()
const a1 = { id5: 1 };
const b1 = { name5: 'Hello' };
const c1 = Object.assign(a1, b1);
// lay object a1 lam goc, gom thuoc tinh cua b1 vao object a1,
// return ve object a1 chu khong tao ra object moi

console.log(a1); // { id5: 1, name5: 'Hello' }
console.log(c1); // { id5: 1, name5: 'Hello' }

console.log(a1 === c1); // true
console.log(b1 === c1); // false

// Clone Object:
const student5 = {
	id5: 1,
	name5: 'Hello',
};
console.log(student5); // { id5: 1, name5: 'Hello' }

// spread operator
const alice = {
	...student5,
	name5: 'Alice',
};
console.log(alice.name5); // Alice -> duoc uu tien
console.log(alice); // { id5: 1, name5: 'Alice' }

// Object.assign()
const bob = Object.assign({}, student5, { name5: 'Bob' });
console.log(bob.name5); // Bob -> duoc uu tien
console.log(bob); // { id5: 1, name5: 'Bob' }
