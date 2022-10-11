// this in global context
// browser: nhap code vao browser
// console.log(this);
// console.log(this === window);

// this.name = 'Hello';
// console.log(window.name);

// node.js; nhap code vao cua so node.js
// console.log(this);
// console.log(this === global);

// this.name = 'Hello';
// console.log(global.name);

// This in normal function
// non- strict mode
function sayHello() {
	console.log(this); // undefined
}

// anonymous function
[1, 2, 3].forEach(function (number) {
	console.log(this); // undefined
});

// This in arrow function
const sayHello = () => {
	console.log(this);
};

function sayHello() {
	console.log(this);

	const getLanguge = () => {
		console.log(this);
	};

	getLanguge();
}

// This in method
// ES5:
const student0 = {
	name: 'Bob',

	sayHello: function () {
		console.log('My name is', this.name);
	},
};
student0.sayHello(); // My name is Bob

// ES6:
const student = {
	name: 'Bob',

	sayHello() {
		console.log('My name is', this.name);
	},
};
student.sayHello(); // My name is Bob

// Su dung arrow function trong object method
const student2 = {
	name: 'Bob',

	sayHello: () => {
		console.log('My name is', this.name);
	},
};
student2.sayHello(); // My name is undefined
