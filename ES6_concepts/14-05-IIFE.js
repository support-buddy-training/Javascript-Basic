// Exp
function main() {
	console.log('Hello');
}
main(); // goi 1 lan duy nhat

// thay vi dung ham o tren thi dung IIFE theo arrow function nhu o duoi
(() => {
	console.log('Hello');
})();

// IIFE with params
function sum(a, b) {
	console.log(a + b);
}
sum(5, 10);

// thay vi viet nhu tren thi dung IIFE
((a, b) => {
	console.log(a + b);
})(5, 10);

// IIFE with async arrow function
(async () => {})();

(async () => {
	await fechData();
})();
