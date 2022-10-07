// Part 11 lesson 10: Exercise 06: Cart sum

export function calcCartSum(cartItemList) {
	if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;

	// reduce
	return cartItemList.reduce((sum, cartItem) => {
		return (sum += cartItem.product.price * cartItem.quantity);
	}, 0);

	// for...i
	// let sum = 0;
	// for (let i = 0; i < cartItemList.length; i++) {
	// 	const cartItem = cartItemList[i];
	// 	const itemTotal = cartItem.product.price * cartItem.quantity;

	// 	sum += itemTotal;
	// }

	// return sum;
}
