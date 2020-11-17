class Pow {
	constructor() {

	}

	increaseVal(value, n) {
		if (n === 0) {
			return 1;
		}
		if (n < 0) {
			return -1;
		}
		let result = 1;
		for (let i = 1; i <= n; i++) {
			result *= value;
		}
		return result;
	}

	sqrt(value) {
		return Math.sqrt(value);
	}
}

module.exports = Pow;