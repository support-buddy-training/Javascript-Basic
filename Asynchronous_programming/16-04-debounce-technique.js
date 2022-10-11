// Setting
function log() {
	console.log('Run!');
}

function debounce(callback, wait) {
	// closures
	let timeoutId;

	return function () {
		// kiem tra co timeoutId khong?
		if (timeoutId) {
			// co thi clear
			clearTimeout(timeoutId);
		}

		// tao ra timeout moi
		timeoutId = setTimeout(callback, wait);
	};
}

const debounceLog = debounce(log, 500);
debounceLog();
debounceLog();
debounceLog();

// Use lodash.debounce
var debounce = require('lodash.debounce');
function log() {
	console.log('Run!');
}
const debounceLog1 = debounce(log, 500);
debounceLog1();
debounceLog1();
debounceLog1();
