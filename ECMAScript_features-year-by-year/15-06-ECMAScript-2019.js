// Array.prototype.{flat, flatMap}
// arr.flat(depth)
console.log([0, 1, [2, 3, 4], 5, 6, [7, 8]].flat(0)); // [ 0, 1, [ 2, 3, 4 ], 5, 6, [ 7, 8 ] ]
console.log([0, 1, [2, 3, 4], 5, 6, [7, 8]].flat(1));
// [
//     0, 1, 2, 3, 4,
//     5, 6, 7, 8
//  ]

console.log([0, 1, [2, [3, 4]], 5, 6, [[7], 8]].flat(1)); // [ 0, 1, 2, [ 3, 4 ], 5, 6, [ 7 ], 8 ]
console.log([0, 1, [2, [3, 4]], 5, 6, [[7], 8]].flat(2));
// [
//     0, 1, 2, 3, 4,
//     5, 6, 7, 8
// ]

console.log([1, 2, 3, , 5].flat()); // [ 1, 2, 3, 5 ] --> empty is remove

// arr.flatMap(mapFn)
console.log([5, 10].map((x) => [x, x * 2])); // [ [ 5, 10 ], [ 10, 20 ] ]
console.log([5, 10].map((x) => [x, x * 2]).flat(1)); // [ 5, 10, 10, 20 ]

console.log([5, 10].flatMap((x) => [x, x * 2])); // [ 5, 10, 10, 20 ]

// Object.fromEntries()
const student = {
	id: 1,
	name: 'Hello',
};
// ES2017
const entries = Object.entries(student);
console.log(entries); // [ [ 'id', 1 ], [ 'name', 'Hello' ] ]

console.log(Object.fromEntries(entries)); // { id: 1, name: 'Hello' }

// String.prototype.{trimStart, trimEnd}
// ES5:
console.log(' Hello my friend '.trim()); // 'Hello my friend'
// ES2019
console.log('  Hello my friend '.trimStart()); // 'Hello my friend '
console.log(' Hello my friend '.trimEnd()); // ' Hello my friend'

// Symbol.prototype.description()
const sym = Symbol('description goes these');
console.log(sym.description); // 'description goes these'
console.log(sym.toString()); // 'Symbol(description goes these)'

// Optional catch binding
function parseStudentFromJSON(str) {
	try {
		return JSON.parse(str);
	} catch (error) {
		// in case of failed to parse, simply return undefined
		return undefined;

		// error is undefined
	}
}

function parseStudentFromJSON(str) {
	try {
		return JSON.parse(str);
	} catch {
		// in case of failed to parse, simply return undefined
		return undefined;
	}
}

// Arrray.prototype.sort()
console.log(
	[
		{ id: 1, name: 'Alice' },
		{ id: 2, name: 'John' },
		{ id: 3, name: 'Bob' },
		{ id: 4, name: 'Alice' },
	].sort((s1, s2) => {
		if (s1.name > s2.name) return 1;
		if (s1.name < s2.name) return -1;

		return 0;
	})
);
// [
//     { id: 1, name: 'Alice' },
//     { id: 4, name: 'Alice' },
//     { id: 3, name: 'Bob' },
//     { id: 2, name: 'John' }
// ]
