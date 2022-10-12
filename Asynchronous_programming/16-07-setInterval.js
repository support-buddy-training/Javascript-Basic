// setting
function countdown(seconds) {
	let currentSecond = seconds;

	const intervalId = setInterval(() => {
		console.log(currentSecond);

		if (currentSecond <= 0) {
			clearInterval(intervalId);
		}

		currentSecond--;
	}, 1000);
}

countdown(5);

// setInterval and setTimeout
let i = 1;
setInterval(function () {
	if (i <= 10) {
		console.log(i);
		i++;
	}
}, 1000);

let i1 = 1;
setTimeout(function run() {
	if (i1 <= 10) {
		console.log(i);
		i1++;
	}
	setTimeout(run, 1000);
}, 1000);
