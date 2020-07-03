class Foo {
	reverseBits(n) {
		const array = toBinary(n);
		const revert = reverse(array);
		const value = toDecade(revert);
		return value;
	}
}

function toBinary(n) {
	const array = [];
	if (n === 0) {
		array.push(0);
		return array;
	}
	let nextValue = n;
	while (true) {
		if (nextValue === 0) {
			break;
		}
		nextValue % 2 !== 0 ? array.push(1) : array.push(0);
		nextValue = Math.floor(nextValue / 2);
	}
	return array;
}

function toDecade(array) {
	let result = 0;
	for (let index = 0; index < array.length; index++) {
		if (array[index] === 1) {
			result += Math.pow(2, index);
		}
	}
	return result;
}

function reverse(array) {
	const reverseArray = [];
	for (let index = 0; index < array.length; index++) {
		reverseArray.unshift(array[index]);
	}
	return reverseArray;
}

module.exports = Foo;

