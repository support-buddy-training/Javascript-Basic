// Part 12 lesson 10: Setting Queue

function createQueue() {
	const queue = [];

	function getFront() {
		// return queue.length > 0 ? queue[0] : undefined;
		return queue[0];
	}

	function getBack() {
		// return queue.length > 0 ? queue[queue.length - 1] : undefined;
		return queue[queue.length - 1];
	}

	function getSize() {
		return queue.length;
	}

	function enqueue(data) {
		queue.push(data);
	}

	function dequeue() {
		return queue.shift();
	}

	return {
		getFront,
		getBack,
		getSize,
		enqueue,
		dequeue,
	};
}

describe('createQueue()', () => {
	test('All in one!', () => {
		// empty queue
		const queue = createQueue();
		expect(queue.getSize()).toBe(0);
		expect(queue.getFront()).toBeUndefined();
		expect(queue.getBack()).toBeUndefined();

		// enqueue: 1
		queue.enqueue(1);
		expect(queue.getSize()).toBe(1);
		expect(queue.getFront()).toBe(1);
		expect(queue.getBack()).toBe(1);

		// enqueue 2
		queue.enqueue(2);
		expect(queue.getSize()).toBe(2);
		expect(queue.getFront()).toBe(1);
		expect(queue.getBack()).toBe(2);

		// dequeue() --> 1
		const four = queue.dequeue();
		expect(four).toBe(1);
		expect(queue.getSize()).toBe(1);
		expect(queue.getFront()).toBe(2);
		expect(queue.getBack()).toBe(2);

		// dequeue() --> 2
		const two = queue.dequeue();
		expect(two).toBe(2);
		expect(queue.getSize()).toBe(0);
		expect(queue.getFront()).toBeUndefined();
		expect(queue.getBack()).toBeUndefined();
	});
});
