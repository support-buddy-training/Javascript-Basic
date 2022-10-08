function createLinkedList() {
	head = null;

	function getHead() {
		return head;
	}

	function getTail() {
		if (head == null) return;

		let tail = head;
		while (tail.next != null) {
			tail = tail.next;
		}

		return tail;
	}

	function getSize() {
		if (head == null) return 0;

		let current = head;
		let count = 0;
		while (current != null) {
			count++;
			current = current.next;
		}

		return count;
	}

	function findIndexByData(data) {
		if (head == null) return -1;

		let current = head;
		let i = 0;
		while (current != null) {
			if (current.data === data) return i;

			i++;
			current = current.next;
		}

		return -1;
	}

	function findWithCallback(callback) {
		if (head == null) return undefined;

		let current = head;
		let i = 0;
		while (current != null) {
			if (callback(current.data, i)) return current.data;

			i++;
			current = current.next;
		}

		return undefined;
	}

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

	function insertTail(newData) {
		const newNode = {
			data: newData,
			next: null,
		};

		if (head == null) {
			head = newNode;
		} else {
			const tail = getTail();
			tail.next = newNode;
		}

		return head;
	}

	function insertBeforePosition(newData, position) {
		if (position <= 0 || head == null) {
			insertHead(newData);
			return head;
		}

		let pre = head;
		let curr = head;
		let i = 0;
		while (curr != null && i < position) {
			prev = curr;
			curr = curr.next;
			i++;
		}

		// insert
		const newNode = {
			data: newData,
			next: curr,
		};

		prev.next = newNode;
	}

	function removeHead() {
		if (head != null) head = head.next;

		return head;
	}

	function removeTail() {
		if (head == null) return null;

		if (head.next == null) {
			head = null;
			return head;
		}

		let secondLast = head;
		while (secondLast.next.next != null) {
			secondLast = secondLast.next;
		}

		secondLast.next = null;
		return head;
	}

	function removwBeforePosition(position) {
		if (position <= 0 || head == null) return removeHead();

		if (head.next == null) {
			head = null;
			return head;
		}

		let prev = head;
		let curr = head;
		let i = 0;

		while (curr.next !== null && i < position) {
			prev = curr;
			curr = curr.next;
			i++;
		}

		prev.next = curr.next;
		return head;
	}

	function printList() {
		if (head == null) return;

		// Current la node hien tai
		let current = head;
		while (current != null) {
			// print data
			console.log(current.data);

			// tu node hien tai tro den node tiep theo
			current = current.next;
		}
	}

	return {
		getHead,
		getTail,
		getSize,
		findIndexByData,
		findWithCallback,
		insertHead,
		insertTail,
		insertBeforePosition,
		removeHead,
		removeTail,
		removwBeforePosition,
		printList,
	};
}

const numberLinkedList = createLinkedList();
numberLinkedList.insertHead(5);
numberLinkedList.insertHead(4);
numberLinkedList.insertHead(3);
numberLinkedList.insertHead(2);
numberLinkedList.insertHead(1);

// console.log('Head la:', numberLinkedList.getHead());
// console.log('Tail la: ', numberLinkedList.getTail());
// console.log('Size la: ', numberLinkedList.getSize());

// console.log(numberLinkedList.findIndexByData(1)); // 0
// console.log(numberLinkedList.findIndexByData(5)); // 4

// console.log(numberLinkedList.findWithCallback((x) => x % 2 === 0)); // 2
// console.log(numberLinkedList.findWithCallback((x) => x % 5 === 0)); // 5

// console.log(numberLinkedList.insertTail(3));

// console.log(numberLinkedList.insertBeforePosition(6, 2));

// console.log(numberLinkedList.removeHead());

// console.log(numberLinkedList.removeTail());

console.log(numberLinkedList.removwBeforePosition(3));

numberLinkedList.printList();
