// Issues
const student = {
	name: 'Hello',

	sayHello() {
		console.log('NAME', this.name);
		console.log('THIS', this);
	},
};

student.sayHello();
// NAME Hello
// THIS { name: 'Hello', sayHello: [Function: sayHello] }

setTimeout(student.sayHello);
// NAME undefined
// THIS global, not student

setTimeout.call(student, student.sayHello);

// Solution: use a wrapper function
const student1 = {
	name: 'Hello',

	sayHello() {
		console.log('NAME', this.name);
		console.log('THIS', this);
	},
};
student1.sayHello();
// NAME Hello
// THIS { name: 'Hello', sayHello: [Function: sayHello] }

setTimeout(() => {
	student1.sayHello();
});
// NAME Hello
// THIS { name: 'Hello', sayHello: [Function: sayHello] }

// Solution use bind()
setTimeout(student1.sayHello.bind(student1));
// NAME Hello
// THIS { name: 'Hello', sayHello: [Function: sayHello] }

// Example
const student2 = {
	name: 'Hi',

	normal() {
		console.log('NAME', this.name);
		console.log('THIS', this);
	},

	arrow: () => {
		console.log('NAME', this.name);
		console.log('THIS', this);
	},

	timeoutNormal() {
		console.log('OUTER THIS', this); // this is student2 object

		setTimeout(function () {
			console.log('NAME', this.name);
			console.log('THIS', this);
		}); // this is global
	},

	timeoutArrow() {
		console.log('OUTER THIS', this); // this is student2 object

		setTimeout(() => {
			console.log('NAME', this.name);
			console.log('THIS', this);
		}); // this is student2 object
	},
};
student2.normal();
// NAME Hi
// THIS {
//   name: 'Hi',
//   normal: [Function: normal],
//   arrow: [Function: arrow],
//   timeoutNormal: [Function: timeoutNormal],
//   timeoutArrow: [Function: timeoutArrow]
// }
student2.arrow();
// NAME undefined
// THIS {}
student2.timeoutNormal();

student2.timeoutArrow();
