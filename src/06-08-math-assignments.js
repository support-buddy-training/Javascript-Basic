// Part 6 lesson 8: Math assignments

// function to calculate the area of a rectangle
function calcAreaRectangle(a, b) {
	if (a <= 0 || b <= 0) return -1;

	return a * b;
}
console.log(calcAreaRectangle(5, 3));

// function to calculate perimeter of a rectangle
function calcPerimeterRectangle(a, b) {
	if (a <= 0 || b <= 0) return -1;

	return (a + b) * 2;
}
console.log(calcPerimeterRectangle(5, 3));

// function to calculate the area of a circle
function calcAreaCircle(r) {
	if (r <= 0) return -1;

	return Math.PI * r ** 2;
}
console.log(calcAreaCircle(2));
