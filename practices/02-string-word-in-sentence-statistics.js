// Part 11 lesson 5: Exercise 02: Word-in-sentence statistics

// ex: str = 'easy frontend is easy'
// [easy, frontend, is, easy]
// statistics = {easy : 2, frontend: 1, is: 1}
export function statisticsWords(str) {
	if (str === '') return {};

	const statistics = {};

	// v1: use forEach
	// tach chuoi va loai bo redundant space
	// str.split(' ')
	// 	.filter((x) => x !== '')
	// 	.forEach((word) => {
	// 		// Neu nhu staticstic da co word roi thi tang len 1
	// 		if (statistics[word]) {
	// 			statistics[word] += 1;
	// 		} else {
	// 			statistics[word] = 1;
	// 		}
	// 	});

	// return statistics;

	// v2: use reduce

	return str
		.split(' ')
		.filter((x) => x !== '')
		.reduce((statistics, word) => {
			// if (statistics[word]) {
			// 	statistics[word] += 1;
			// } else {
			// 	statistics[word] = 1;
			// }

			// Dung if theo toan tu ba ngoi
			statistics[word] = statistics[word] !== undefined ? (statistics[word] += 1) : 1;

			return statistics;
		}, {});
}

// const str = 'hello    my     friends';
// console.log(str.split(' ')); // [ 'hello', '', '', '', 'my', '', '', '', '', 'friends' ]
// console.log(str.split(' ').filter((x) => x !== '')); // [ 'hello', 'my', 'friends' ]
