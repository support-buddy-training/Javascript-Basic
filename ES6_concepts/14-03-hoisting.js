// var n; // declaration: chỉ đưa phần biến lên chứ không đưa phần gán giá trị
var n;
console.log(n); // undefined
var n = 10;

// console.log(num); // error: num is not defined
// num = 6; // khong co declaration nen khong duoc dem len

// example
var tip = 100;

(function () {
	var tip; // declarations | undefined
	var tip = 10; // phai dem len dau
	console.log(tip);

	console.log('I have $' + husband()); // NaN

	function wife() {
		return tip * 2;
	}

	function husband() {
		return wife() / 2;
	}

	// var tip = 10;
})();

// example function scope vs block scope
function sayHello() {
	{
		const language = 'en'; // block scope
		var message = 'hello'; // function scope
		console.log(message);
	}
	// console.log(language); // languge is not defined
	console.log(message); // hello
}
sayHello();
