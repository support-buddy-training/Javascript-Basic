// Logical Assignment Operator:
// Logical OR assignment
const a = { duration: 50, title: '' };
a.duration ||= 10;
console.log(a.duration); // 50

a.title ||= 'title is empty';
console.log(a.title); // title is empty'

console.log(a); // { duration: 50, title: 'title is empty' }

// Logical AND assignment
let x = 1; // x la truthy
let y = 0; // y la falsy

x &&= 2;
console.log(x); // x = 2 vi x la truthy

y &&= 2;
console.log(y); // y = 0 vi y la falsy

// Logical NULLISTS assignment
const c = { duration: 50 };

c.duration ??= 10;
console.log(c.duration); // 50

c.spend ??= 25;
console.log(c.spend); // 25

console.log(c); // { duration: 50, spend: 25 }

// Numeric separator
// before
const e = 1000000; // 1000000

// ES2021
const e1 = 1_000_000;
console.log(e1); // 1000000

// String.prototype.replaceAll()
// Before:
const queryString = 'q=query+string+parameters';
const withSpace = queryString.replace(/\+/g, ' ');
console.log(withSpace); // 'q=query string parameters'

const withSpace2021 = queryString.split(['+']).join(' ');
console.log(withSpace2021); // q=query string parameters
console.log(queryString.split('+').join(' ').split('=').join(' ')); // q query string parameters

const withSpace2021ReplaceAll = queryString.replaceAll('+', ' ');
console.log(withSpace2021ReplaceAll); // q=query string parameters

// So sanh replace() va replaceAll()
console.log(queryString.replace('+', ' ')); // q=query string+parameters
console.log(queryString.replaceAll('+', ' ')); // q=query string parameters
