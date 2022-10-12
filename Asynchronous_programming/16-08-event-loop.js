// Example callback queue vs promise queue
console.log('a');

setTimeout(() => console.log('b'), 0);

new Promise((resolve, reject) => {
	resolve();
}).then(() => console.log('c'));

console.log('d');
// a, d, c, b
