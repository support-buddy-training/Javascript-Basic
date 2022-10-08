// Part 9 lesson 6: Add and remove elements in array

// Add new items at the end
const numberList = [1, 2, 3];
numberList.push(4, 5);
console.log(numberList);

// Remove items at the end
const numberList1 = [1, 2, 3];
const lastNumber = numberList1.pop();
const lastNumber1 = numberList1.pop();
console.log(numberList1, lastNumber, lastNumber1);

// Add new items at the beginning
const numberList2 = [1, 2, 3];
numberList2.unshift(0);
console.log(numberList2);

// Remove items at the beginning
const numberList3 = [1, 2, 3];
const firstNumber = numberList3.shift();
console.log(numberList3, firstNumber);

// Add/remove items at the middle of an array
// splice(startindex, howmany, value add)
const numberList4 = [1, 3, 5, 7];
numberList4.splice(2, 1, 2, 4);
console.log(numberList4);

// const numberList4 = [1, 3, 5, 7];
// numberList4.splice(1, 0, 2);
// console.log(numberList4);

// const numberList4 = [1, 3, 5, 7];
// numberList4.splice(1, 2, 2, 4);
// console.log(numberList4);
