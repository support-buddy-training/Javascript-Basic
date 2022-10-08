// // Create Map
// const map = new Map();
// console.log(map.size); // 0

// const map1 = new Map([
// 	['a', 1],
// 	['b', 2],
// 	['c', 3],
// ]);
// console.log(map1); // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
// console.log(map1.size); // 3

// // Get/ set
// const map2 = new Map();

// map.set('a', 1);
// map.set('a', 2); // a = 2
// console.log(map.size); // 1

// map.get('a'); // 2
// map.get('b'); // undefined

// map.delete('b'); // undefined
// map.delete('a'); // true

// map.get('a'); // undefined
// console.log(map.size); // 0

// // Loop through Map
// const map3 = new Map([
// 	['a', 1],
// 	['b', 2],
// 	['c', 3],
// ]);

// for (const [key, value] of map3) {
// 	console.log(key, value);
// }

// map3.forEach((value, key) => {
// 	console.log(key, value);
// });

// Show city name using map
// Object
// const cityList = [
// 	{ id: 1, name: 'TP.HCM' },
// 	{ id: 2, name: 'TP.Pleiku' },
// ];

// const studentList = [
// 	{ id: 123, name: 'H', cityId: 1 },
// 	{ id: 2, name: 'B', cityId: 2 },
// ];

// Map
// using forEach
const cityList = [
	{ id: 1, name: 'TP.HCM' },
	{ id: 2, name: 'TP.Pleiku' },
];
const cityMap = new Map();
cityList.forEach((city) => {
	cityMap.set(city.id, city);
});
console.log(cityMap);
console.log(cityMap.get(1).name);
console.log(cityMap.get(2).name);

// using reduce
const cityMap2 = cityList.reduce((map, city) => {
	map.set(city.id, city);
	return map;
}, new Map());
console.log(cityMap2);
console.log(cityMap2.get(1).name);
console.log(cityMap2.get(2).name);
