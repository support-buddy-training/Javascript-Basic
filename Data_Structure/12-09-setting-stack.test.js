// Part 12 lesson 9: Setting Stack

function createStack() {
	const stack = [];

	function getTop() {
		return stack.length > 0 ? stack[stack.length - 1] : undefined;
	}

	function getSize() {
		return stack.length;
	}

	function isEmpty() {
		return stack.length === 0;
	}

	function push(data) {
		stack.push(data);
	}

	function pop() {
		return stack.pop();
	}

	return {
		getTop,
		getSize,
		isEmpty,
		push,
		pop,
	};
}

describe('createStack()', () => {
	test('All in one!', () => {
		// empty stack
		const stack = createStack();
		expect(stack.getSize()).toBe(0);
		expect(stack.isEmpty()).toBe(true);
		expect(stack.getTop()).toBeUndefined(true);

		// push: 4
		stack.push(4);
		expect(stack.getSize()).toBe(1);
		expect(stack.isEmpty()).toBe(false);
		expect(stack.getTop()).toBe(4);

		// push 2
		stack.push(2);
		expect(stack.getSize()).toBe(2);
		expect(stack.isEmpty()).toBe(false);
		expect(stack.getTop()).toBe(2);

		// pop() --> 2
		const two = stack.pop();
		expect(two).toBe(2);
		expect(stack.getSize()).toBe(1);
		expect(stack.isEmpty()).toBe(false);
		expect(stack.getTop()).toBe(4);

		// pop() --> 4
		const four = stack.pop();
		expect(four).toBe(4);
		expect(stack.getSize()).toBe(0);
		expect(stack.isEmpty()).toBe(true);
		expect(stack.getTop()).toBeUndefined();
	});
});
