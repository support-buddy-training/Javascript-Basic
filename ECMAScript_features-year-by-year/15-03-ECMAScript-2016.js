// Check item is existed
// Before 2016
console.log([1, 2, 3, 4, 5].indexOf(4)); // 3
console.log([1, 2, 3, 4, 5].indexOf(6)); // -1
// Array.prototype.includes()
console.log([1, 2, 3, 4, 5].includes(3)); // true
console.log([1, 2, 3, 4, 5].includes(6)); // false

// Exponentiation Operator
// Before 2016
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(3, 3)); // 27
// 2016
console.log(2 ** 3); // 8
console.log(3 ** 3); // 27
