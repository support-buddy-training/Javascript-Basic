// Part 9 lesson 8: Find element

[2, 1, 3].find((x) => x % 2 === 0);
[2, 1, 3].findIndex((x) => x % 2 === 0);

// Callback
function main(callbackFn) {
	// propressing...
	// do another stuff
	callbackFn();
}

function callbackFn() {
	console.log('call me when needed');
}

main(callback);

// Example callback
function main(onFinish) {
	let sum = 0;
	for (let i = 0; i < 10; i++) {
		sum += i;
	}

	onFinish(sum);
}

function handleOnFinish(sum) {
	console.log('Sum is: ', sum);
}

main(handleOnFinish);
