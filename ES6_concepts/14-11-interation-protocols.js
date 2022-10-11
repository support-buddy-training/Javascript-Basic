// iterable
const numberList = [1, 2, 3, 4, 5];

for (const number of numberList) {
	// for... of la iterable duoc dinh nghia san
	console.log(number);
}

// Tu dinh nghia iterable
const iterable = {
	[Symbol.iterator]() {
		return {}; // this object should be an iterator
	},
};

// iterator
// const iterator = {
// 	next() {
// 		return { value: 1, done: true }; // value la gia tri tai buoc do, done la da ket thuc hay chua, chua done: false, roi done: true
// 	},
// };

// cai dat
// Tao iterator de loop qua n lan:
// function createIterator(n) {
// 	let i = 0;

// 	return {
// 		next() {
// 			const result = {
// 				value: i,
// 				done: i >= n,
// 			};

// 			// INCREASE i
// 			i++;

// 			return result;
// 		},
// 	};
// }

// const iterator = createIterator(10);

// let result = iterator.next();
// while (!result.done) {
// 	console.log(result.value);

// 	result = iterator.next();
// }

// cai dat phuong thuc iterale de su dung trong for of
function createIterable(n) {
	let i = 0;

	return {
		[Symbol.iterator]() {
			return {
				next() {
					const result = {
						// value: i,
						value: [i, i * 2],
						done: i >= n,
					};

					// INCREASE i
					i += 5;

					return result;
				},
			};
		},
	};
}

const iterator = createIterable(50);

// for (const number of iterator) {
// 	console.log(number);
// }

for (const [number, numberx2] of iterator) {
	console.log(number, numberx2);
}
