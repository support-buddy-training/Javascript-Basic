// Setting
function log() {
	console.log('Run!!');
}

function throttle(callback, wait) {
	let isThrottling = false;

	return function () {
		if (isThrottling) return; // 2, 3, 4 come here

		isThrottling = true; // 1 come here
		setTimeout(() => {
			callback();

			// reset cho lan tiep theo
			isThrottling = false;
		}, wait);
	};
}
const throttleLog = throttle(log, 500);
// 0 -> 500
throttleLog(); // settimeout 500 --> call --> turn of flag throttle
throttleLog(); // check throttling --> yes --> ignore (bo qua)
throttleLog(); // check throttling --> yes --> ignore (bo qua)
throttleLog(); // check throttling --> yes --> ignore (bo qua)

// 500 --> 1000
setTimeout(throttleLog, 500);
setTimeout(throttleLog, 500);
setTimeout(throttleLog, 600);
setTimeout(throttleLog, 600);
setTimeout(throttleLog, 700);
setTimeout(throttleLog, 700);

// Use lodash.throttle
var throttle = require('lodash.throttle');
function log() {
	console.log('Run!!');
}
const throttleLog1 = throttle(log, 500);
// 0 -> 500
throttleLog1();
throttleLog1();
throttleLog1();
throttleLog1();

// 500 --> 1000
setTimeout(throttleLog1, 500);
setTimeout(throttleLog1, 500);
setTimeout(throttleLog1, 600);
setTimeout(throttleLog1, 600);
setTimeout(throttleLog1, 700);
setTimeout(throttleLog1, 700);
