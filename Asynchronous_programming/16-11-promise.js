// resolve
const promise = new Promise((resolve, reject) => {
	setTimeout(() => resolve(1), 3000);
});

promise.then((result) => console.log(result)).catch((error) => console.log(error));
console.log(promise);

// reject
const promise1 = new Promise((resolve, reject) => {
	reject(new Error('Stop, something wrong!'));
});
promise1.then((result) => console.log(result)).catch((error) => console.log('catch', error));
console.log(promise1);

// example promise method
const b = new Promise((resolve) => {
	resolve('BBB');
});

const promiseA = Promise.resolve('AAA');
const promiseB = Promise.resolve(b);

Promise.all([promiseA, promiseB])
	.then(([resultA, resultB]) => {
		console.log(resultA, resultB);
	})
	.catch((error) => console.log(error));

// Promise chaining
Promise.resolve(2)
	.then((n) => n * 2)
	.then((n) => Promise.resolve(n * 2))
	.then((n) => {
		const finalNumber = n + 10;
		console.log(finalNumber);
		return finalNumber;
	})
	.catch((error) => console.log(error));
