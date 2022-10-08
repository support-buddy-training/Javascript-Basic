// Part 12 lesson 19: Binary Search Tree - Remove
function createBinarySearchTree(initKeyList) {
	let root = null;
	if (Array.isArray(initKeyList) && initKeyList.length > 0) {
		initKeyList.forEach((key) => {
			root = insert(root, key);
		});
	}

	function insert(node, key) {
		newNode = {
			key,
			left: null,
			right: null,
		};

		if (node == null) return newNode;
		if (node.key === key) return node;

		if (key > node.key) {
			node.right = insert(node.right, key);
		} else {
			node.left = insert(node.left, key);
		}

		return node;
	}

	function findMin(node) {
		if (node == null) return null;

		let minNode = node;
		while (minNode.left != null) {
			minNode = minNode.left;
		}

		return minNode;
	}

	function search(node, key) {
		if (node == null) return null;

		if (key > node.key) return search(node.right, key);
		if (key < node.key) return search(node.left, key);

		return node;
	}

	function getMathNodeCount(node) {
		if (node == null) return 0;

		const leftHeight = getMathNodeCount(node.left);
		const rightHeigt = getMathNodeCount(node.right);

		return leftHeight > rightHeigt ? leftHeight + 1 : rightHeigt + 1;
	}

	function getHeight() {
		const height = getMathNodeCount(root);
		return height > 0 ? height - 1 : 0;
	}

	function printNodeAtLevel(node, level) {
		if (node == null) return;

		if (level == 0) {
			console.log(node.key);
			return;
		}

		printNodeAtLevel(node.left, level - 1);
		printNodeAtLevel(node.right, level - 1);
	}

	// https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/?ref=lbp
	function bfs() {
		const height = getHeight();
		for (let i = 0; i <= height; i++) {
			printNodeAtLevel(root, i);
		}
	}

	function printInorder(node) {
		if (node == null) return;

		printInorder(node.left);
		console.log(node.key); // root
		printInorder(node.right);
	}

	function printPrevOrder(node) {
		if (node == null) return;

		console.log(node.key);
		printPrevOrder(node.left);
		printPrevOrder(node.right);
	}

	function printPostOrder(node) {
		if (node == null) return;

		printPostOrder(node.left);
		printPostOrder(node.right);
		console.log(node.key);
	}

	function remove(node, key) {
		if (node == null) return null;

		// tim node can xoa
		if (key > node.key) {
			node.right = remove(node.right, key);
			return node;
		}

		if (key < node.key) {
			node.left = remove(node.left, key);
			return node;
		}

		//  no child
		if (node.left == null && node.right == null) return null;

		// one child
		if (node.left == null) {
			node = node.right;
			return node;
		}

		if (node.right == null) {
			node = node.left;
			return node;
		}

		// two child
		const minNode = findMin(node.right);
		node.key = minNode.key;
		node.right = remove(node.right, minNode.key);

		return node;
	}

	return {
		root,
		insert,
		findMin,
		search,
		getMathNodeCount,
		getHeight,
		printNodeAtLevel,
		bfs,
		printInorder,
		printPrevOrder,
		printPostOrder,
		remove,
	};
}

// const binarySearchTree = createBinarySearchTree([10, 7, 15]);
// console.log(binarySearchTree.root);
// console.log(binarySearchTree.findMin(binarySearchTree.root));

const binarySearchTree = createBinarySearchTree([10, 7, 15, 5, 9, 20, 13, 17]);
console.log(binarySearchTree.root);
// console.log(binarySearchTree.findMin(binarySearchTree.root));
// console.log(binarySearchTree.search(binarySearchTree.root, 8));
// console.log(binarySearchTree.search(binarySearchTree.root, 7));
// console.log(binarySearchTree.search(binarySearchTree.root, 20));
// console.log('Nodes: ', binarySearchTree.getMathNodeCount(binarySearchTree.root));
// console.log('Height', binarySearchTree.getHeight(binarySearchTree.root));
// binarySearchTree.bfs();
// binarySearchTree.printInorder(binarySearchTree.root);
// binarySearchTree.printPrevOrder(binarySearchTree.root);
// binarySearchTree.printPostOrder(binarySearchTree.root);

binarySearchTree.root = binarySearchTree.remove(binarySearchTree.root, 5);
// binarySearchTree.root = binarySearchTree.remove(binarySearchTree.root, 20);
// binarySearchTree.root = binarySearchTree.remove(binarySearchTree.root, 10);
binarySearchTree.printInorder(binarySearchTree.root);
