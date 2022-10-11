// ES6/ rest element
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// ES6/ spread element
const numberList1 = [1, 2, 3];
const numberList2 = [4, 5, 6, 7, 8];
const mergeList = [...numberList1, ...numberList2, 9, 10];
console.log(mergeList);
// [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
// ]

// ES2018/ Rest properties
const student = {
	id: 1,
	name: 'Hello',
	isHero: false,
};

const { id, ...restObject } = student;
console.log(id); // 1
console.log(restObject); // { name: 'Hello', isHero: false }

// ES2018/ Spread properties
const alice = {
	id: 1,
	name: 'Alice',
};

const bob = {
	...alice,
	name: 'Bob',
};
console.log(bob); // { id: 1, name: 'Bob' }
console.log(alice); // { id: 1, name: 'Alice' }
