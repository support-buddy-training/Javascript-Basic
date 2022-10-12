// Part 4 lesson 8: Variables and naming

const sanPham = 'js course'; // BAD
const product = 'js course'; // BAD
const productName = 'js course'; // GOOD

// true/false
let hasValidItem = true;
let isSelected = false;
let show = false;
let hasPositiveNumber = false;

// single noun
const student = {
	name: 'Hello',
};

// plural noun
const students = [].map((student) => console.log(student.name)); // BAD
const studentList = [].map((student) => console.log(student.name)); // GOOD
