// Part 7 lesson 10: Truncate

// Create function 'truncate(text, maxlength)' that checks the length of the text and
// if exceeds maxlength - replaces the end of str with the ellipsis charactor '"…"',
// to make its length equal to maxlength
// Hello -> truncate('Hello Word', 3) -> Hel…
// In UTF-16 the ellipsis charactor is \u2026

function truncate(text, maxlength) {
	if (text.length <= maxlength) return text;

	const shortstr = text.slice(0, maxlength - 1);
	return `${shortstr}\u2026`;
}
console.log(truncate('Hello Word', 3));
console.log(truncate('Hello Word', 5));
console.log(truncate('Hello Word', 4));
