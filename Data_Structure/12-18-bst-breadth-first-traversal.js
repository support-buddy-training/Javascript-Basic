// Part 12 lesson 18: Binary Search Tree - Breadth First Traversal
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

	return {
		root,
		insert,
		findMin,
		search,
		getMathNodeCount,
		getHeight,
		printNodeAtLevel,
		bfs,
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
binarySearchTree.bfs();
