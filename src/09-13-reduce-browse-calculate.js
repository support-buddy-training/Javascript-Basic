//  Part 9 lesson 13: Browse arrays and calculate with reduce

// Find total (sum)
// Use for...i
const numberList = [2, 3, 5, 1];
let sum = 0;
for (let i = 0; i < numberList.length; i++) {
	sum += numberList[i];
}
console.log(sum);

// Use reduce
numberList1 = numberList.reduce((sum, number) => (sum += number));
console.log(numberList1);

const result0 = [1, 2, 3].reduce((sum, number) => sum + number);
console.log(result); // 1 + 2 + 3

const result = [1, 2, 3].reduce((sum, number) => sum + number, 0);
console.log(result); // 0 + 1 + 2 + 3 = 6

const result1 = [1, 2, 3].reduce((sum, number) => sum + number, 5);
console.log(result1); // 5 + 1 + 2 + 3 = 11
