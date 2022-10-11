function sayHello(a, b) {
	console.log(this.name, a + b);
}

const student = {
	name: 'Hello',
};

const studentSayHello = sayHello.bind(student);
// studentSayHello(); // tao ra ham moi nen co the goi lai bat cu luc nao, khong goi thi khong chay
studentSayHello(1, 2); // 3

sayHello.call(student, 2, 3); // 5
sayHello.apply(student, [3, 4]); // 7
