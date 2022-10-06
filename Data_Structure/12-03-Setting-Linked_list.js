// // Part 12 lesson 3: Setting Linked List
// // createLinkedList
// // + insert head (them vao dau)
// // + printList
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

numberLinkedList.printList();

// function createLinkedList() {
// 	head = null;

// 	function insertHead(newData) {
// 		const newNode = {
// 			data: newData,
// 			next: null,
// 		};

// 		if (head == null) {
// 			head = newNode;
// 			return;
// 		}

// 		// otherwise, linked list has some item
// 		newNode.next = head; // head = 1
// 		head = newNode; // newNode = 1, head = 2
// 	}

// 	function printList() {
// 		if (head == null) return;

// 		let current = head;
// 		while (current != null) {
// 			// print data
// 			console.log(current.data);

// 			//
// 			current = current.next;
// 		}
// 	}

// 	return {
// 		insertHead,
// 		printList,
// 	};
// }

// const numberLinkedList = createLinkedList();

// numberLinkedList.insertHead(5);
// numberLinkedList.insertHead(4);
// numberLinkedList.insertHead(3);
// numberLinkedList.insertHead(2);
// numberLinkedList.insertHead(1);
// // 5 --> 4 --> 3 --> 2 --> 1

// numberLinkedList.printList();
