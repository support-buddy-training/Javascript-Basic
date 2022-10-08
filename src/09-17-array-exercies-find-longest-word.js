// Part 9 lesson 17: Find to the longest word

// for...i
function findLongestWordI(wordList) {
	if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

	max = wordList[0].length;
	for (let i = 0; i < wordList.length; i++) {
		if (wordList[i].length > max) {
			max = wordList[i];
		}
	}

	return max;
}
console.log(findLongestWordI(['Hello', 'my', 'friend']));

// forEach
function findLongestWordEach(wordList) {
	if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

	max = wordList[0].length;
	wordList.forEach((word) => {
		if (word.length > max) {
			max = word;
		}
	});

	return max;
}
console.log(findLongestWordEach(['Hello', 'my', 'friend']));

// Reduce version 1:
function findLongestWordEach(wordList) {
	if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

	return wordList.reduce((max, word) => {
		if (max > word.length) return max;
		return word;
	});
}
console.log(findLongestWordEach(['Hello', 'my', 'friend']));

// Reduce version 2: Use the trinity operator
function findLongestWordEach(wordList) {
	if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

	return wordList.reduce((max, word) => {
		return max > word.length ? max : word;
	});
}
console.log(findLongestWordEach(['Hello', 'my', 'friend']));

// Reduce version 3: Use the trinity operator and shorthand
function findLongestWordEach(wordList) {
	if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

	return wordList.reduce((max, word) => (max > word.length ? max : word));
}
console.log(findLongestWordEach(['Hello', 'my', 'friend']));
