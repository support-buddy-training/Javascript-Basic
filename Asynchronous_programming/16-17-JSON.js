// JSON.stringify()
const student = { id: 1, name: 'Hello', age: undefined };
console.log(JSON.stringify(student)); // {"id":1,"name":"Hello"}

const list = [null, undefined, NaN];
console.log(JSON.stringify(list)); // [null,null,null]

// Example in mozilla stringify
JSON.stringify({}); // '{}'
JSON.stringify(true); // 'true'
JSON.stringify('foo'); // '"foo"'
JSON.stringify([1, 'false', false]); // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 }); // '{"x":5}'

JSON.stringify(new Date(2006, 0, 2, 15, 4, 5));
// '"2006-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String('false'), new Boolean(false)]);
// '[3,"false",false]'

// String-keyed array elements are not enumerable and make no sense in JSON
const a = ['foo', 'bar'];
a['baz'] = 'quux'; // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
JSON.stringify(a);
// '["foo","bar"]'

JSON.stringify({ x: [10, undefined, function () {}, Symbol('')] });
// '{"x":[10,null,null,null]}'

// Standard data structures
JSON.stringify([
	new Set([1]),
	new Map([[1, 2]]),
	new WeakSet([{ a: 1 }]),
	new WeakMap([[{ a: 1 }, 2]]),
]);
// '[{},{},{},{}]'

// TypedArray
JSON.stringify([new Int8Array([1]), new Int16Array([1]), new Int32Array([1])]);
// '[{"0":1},{"0":1},{"0":1}]'
JSON.stringify([
	new Uint8Array([1]),
	new Uint8ClampedArray([1]),
	new Uint16Array([1]),
	new Uint32Array([1]),
]);
// '[{"0":1},{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Float32Array([1]), new Float64Array([1])]);
// '[{"0":1},{"0":1}]'

// toJSON()
JSON.stringify({
	x: 5,
	y: 6,
	toJSON() {
		return this.x + this.y;
	},
});
// '11'

// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol('') });
// '{}'
JSON.stringify({ [Symbol('foo')]: 'foo' });
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')]);
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, (k, v) => {
	if (typeof k === 'symbol') {
		return 'a symbol';
	}
});
// undefined

// Non-enumerable properties:
JSON.stringify(
	Object.create(null, {
		x: { value: 'x', enumerable: false },
		y: { value: 'y', enumerable: true },
	})
);
// '{"y":"y"}'

// BigInt values throw
// JSON.stringify({ x: 2n });
// TypeError: BigInt value can't be serialized in JSON

// JSON.parse()
console.log(JSON.parse('123')); // 123
console.log(JSON.parse('true')); // true
console.log(JSON.parse('null')); // null
console.log(JSON.parse('{}')); // {}
console.log(JSON.parse('[]')); // []

// property name must be used double quote
console.log(JSON.parse('{"id": 123}')); // { id: 123 }

// Not allow trailing comma
// console.log(JSON.parse('[1, 2, 3, 4, 5,]')); // error
console.log(JSON.parse('[1, 2, 3, 4, 5]'));

// console.log(JSON.parse('{"foo": 1,}')); // error
console.log(JSON.parse('{"foo": 1}')); // { foo: 1 }
