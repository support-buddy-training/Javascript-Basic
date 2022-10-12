// async function always return Promise
async function getNumber() {
	return 10;
}
console.log(getNumber()); // it is return Promise
// Promise { 10 }

// log result
getNumber().then((n) => console.log(n)); // 10

// return a Promise in function async -> return a Promise
async function getNumber() {
	return Promise.resolve(10);
}
console.log(getNumber()); // Promise { <pending> }
getNumber().then((n) => console.log(n)); // 10

// Handle error
async function getAllStudent() {
	try {
		const url = 'https://js-post-api.herokuapp.com/api/students?_page=1';
		const response = await fetch(url); // it is a Promise, await to promise of fetch(url) resolve, if promise fetch(url) fulfilled then return response
		const data = await response.json();

		console.log(data);
	} catch (error) {
		// if fetch(url) error/ code in try error then run catch
		console.log(error);
	}
}

async function getData() {
	// return Promise.reject(new Error('tata, I am error'));
	throw new Error('tata, I am error');
}

async function main() {
	try {
		const data = await getData();
	} catch (error) {
		console.log(error);
	}
}
main(); // Error: tata, I am error
