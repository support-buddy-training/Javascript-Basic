// Part 5 lesson 11: Excercise switch...case
// A list of error codes from server
// E01: Invalid username or password
// E02: Too many attempts
// E03: Missing data
// Other Code: Something want wrong
// Write a function that take errorCode and return the according message

function getErrorMessage(errorCode) {
	let message = '';

	switch (errorCode) {
		case 'E01': {
			message = 'Invalid username or password';
			break;
		}
		case 'E02': {
			message = 'Too many attempts';
			break;
		}
		case 'E03': {
			message = 'Missing data';
			break;
		}

		default:
			message = 'Something want wrong';
	}

	return message;
}
console.log(getErrorMessage('E01'));
console.log(getErrorMessage('E02'));
console.log(getErrorMessage('E03'));
console.log(getErrorMessage('E04'));

// version 2: error map
function getErrorMessage(errorCode) {
	const errorMap = {
		E01: 'Invalid username or password',
		E02: 'Too many attempts',
		E03: 'Missing data',
	};

	return (message = errorMap[errorCode] || 'Something want wrong');
}
console.log(getErrorMessage('E01'));
console.log(getErrorMessage('E02'));
console.log(getErrorMessage('E03'));
console.log(getErrorMessage('E04'));
