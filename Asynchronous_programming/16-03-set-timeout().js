function sayHello() {
	console.log('Hello');
}
// say hello after 1 second
setTimeout(sayHello, 1000);

// inline function theo arrow function
setTimeout(() => {
	console.log('Hi');
}, 1000);

// say hello as soon as you can (not immediately - khong ngay lap tuc)
setTimeout(() => {
	console.log('Hi');
}, 0);

setTimeout(() => {
	console.log('Hi');
});

console.log('log1');
setTimeout(() => {
	console.log('log2');
});
console.log('log3');
// log1
// log3
// log2

// Late timeout:
setTimeout(() => {
	console.log('cho duoc chay. Tada!!');
}); // chay cuoi cung

for (let i = 0; i < 10; i++) {
	console.log('chay dau tien');
} // chay dau tien

console.log('chay thu hai'); // chay xong cai nay
// chay dau tien
// chay dau tien
// chay dau tien
// chay dau tien
// chay dau tien
// chay dau tien
// chay dau tien
// chay dau tien
// chay dau tien
// chay dau tien
// chay thu hai
// cho duoc chay. Tada!!
