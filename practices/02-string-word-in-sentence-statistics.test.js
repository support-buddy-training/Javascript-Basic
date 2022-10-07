import { statisticsWords } from './02-string-word-in-sentence-statistics';

describe('statisticsWords(str)', () => {
	// Nen tra ve doi tuong rong trong truong hop string rong
	test('should return empty object in case str is empty', () => {
		expect(statisticsWords('')).toEqual({});
	});

	// Nen tra ve thong ke chinh xac khi str khong co khoang trong du thua
	test("should return correct statistics when string doesn't have redundant space", () => {
		expect(statisticsWords('easy frontend is very easy')).toEqual({
			easy: 2,
			frontend: 1,
			is: 1,
			very: 1,
		});
	});

	// Nen tra ve thong ke chinh xac khi str co khoang trong du thua
	test('should return correct statistics when string have redundant space', () => {
		expect(statisticsWords('easy  frontend  is  very  easy')).toEqual({
			easy: 2,
			frontend: 1,
			is: 1,
			very: 1,
		});
	});
});
