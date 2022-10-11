// Nullish Coalescing
const value = x ?? y;
// trả về y nếu x là nullist (null/ undefined)
// còn lại thì trả về x

// Example
console.log(null ?? 'Hello'); // Hello
console.log(undefined ?? 'Hello'); // Hello

console.log('' ?? 'Hello'); // ''
console.log(0 ?? 'Hello'); // 0

console.log(Number.NaN ?? 'Hello'); // NaN
console.log(false ?? 'Hello'); // false

// Optional Chaining
const student = {
	id: 1,
	name: 'Hello',
	address: {
		city: 'HCM',
	},
	hobbies: ['music', 'cooking'],
	sayHello() {
		console.log('Hello');
	},
};
console.log(student.address.city); // 'HCM'
console.log(student.hobbies[0]); // 'music'
console.log(student.hobbies[1]); // 'cooking'
student.sayHello(); // 'Hello'

console.log(student.hello?.name); // undefined
console.log(student.color?.[0]); // undefined
