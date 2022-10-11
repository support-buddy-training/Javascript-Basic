// example
// memoization: ki thuat ghi nho

function createCounter(initValue) {
	let value = initValue;
	// let cache = {} // lan dau tien moi di kiem tra, con nhung lan sau gap lai se kiem tra trong cache roi return ra luon

	function increase() {
		value++;
	}

	function decrease() {
		value--;
	}

	function getValue() {
		console.log(value);
		return value;
	}

	return {
		increase,
		decrease,
		getValue,
	};
}

const counter = createCounter(0);
counter.getValue();
counter.increase();
counter.increase();

counter.decrease();

counter.getValue();

const counter2 = createCounter(10);
counter2.getValue();
counter2.increase();
counter2.increase();

counter2.decrease();

counter2.getValue();
