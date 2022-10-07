import { calcCartSum } from './03-05-array-sum-cart-sum';
describe('calcCartSum(cartItemList)', () => {
	test('should return 0 if list empty', () => {
		expect(calcCartSum([])).toEqual(0);
		expect(calcCartSum({})).toEqual(0);
		expect(calcCartSum('')).toEqual(0);
		expect(calcCartSum(123)).toEqual(0);
	});

	test('should returns 0 if either the price or quantity is zero', () => {
		const cartItemList = [
			{ id: 1, product: { id: 1, price: 0 }, quantity: 1 },
			{ id: 1, product: { id: 1, price: 1000 }, quantity: 0 },
		];
		expect(calcCartSum(cartItemList)).toBe(0);
	});

	test('should returns correct total ìf price/ quantity > 0', () => {
		const cartItemList = [
			{ id: 1, product: { id: 1, price: 1000 }, quantity: 1 },
			{ id: 1, product: { id: 1, price: 1000 }, quantity: 2 },
		];
		expect(calcCartSum(cartItemList)).toBe(3000);
	});
});
