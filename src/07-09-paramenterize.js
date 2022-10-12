// Part 7 lesson 9: Paramenterize

// Write a function to paramenterize a string
// Eg: paparamenterize('Code JS is fun') -> 'code-js-is-fun')
// toLowerCase() -> replaceAll()/split and join

// replaceAll()
function paramenterize(str) {
	return str.toLowerCase().replaceAll(' ', '-');
}
console.log(paramenterize('Code JS is fun'));

// split and join
function paramenterize(str) {
	return str.toLowerCase().split(' ').join('-');
}
console.log(paramenterize('Code JS is fun'));
