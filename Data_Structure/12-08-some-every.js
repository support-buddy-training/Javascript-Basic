// Part 12 lesson 08: Some and Every
// some(isvalidFFn)
// every(isvalidFFn)

function createLinkedList() {
	head = null;

	function insertHead(newData) {
		const newNode = {
			data: newData,
			next: null,
		};

		if (head == null) {
			head = newNode;
			return;
		}

		newNode.next = head;
		head = newNode;
	}

	function some(isValidFn) {
		if (head == null) return false;

		let current = head;
		while (current.next != null) {
			if (isValidFn(current.data)) return true;

			current = current.next;
		}

		return false;
	}

	function every(isValidFn) {
		if (head == null) return false;

		let current = head;
		while (current.next != null) {
			if (!isValidFn(current.data)) return false;

			current = current.next;
		}

		return true;
	}

	function printList() {
		if (head == null) return;

		let current = head;
		while (current != null) {
			// print data
			console.log(current.data);

			current = current.next;
		}
	}

	return {
		insertHead,
		some,
		every,
		printList,
	};
}

const numberLinkedList = createLinkedList();
numberLinkedList.insertHead(5);
numberLinkedList.insertHead(4);
numberLinkedList.insertHead(3);
numberLinkedList.insertHead(2);
numberLinkedList.insertHead(1);
numberLinkedList.insertHead(0);

console.log(numberLinkedList.some((x) => x % 2 === 0));
console.log(numberLinkedList.every((x) => x % 2 === 0));

numberLinkedList.printList();
