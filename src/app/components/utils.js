class Pow {
	static pow(value, n) {
		if (n > 0) {
			return value * pow(value, n - 1);
		} else {
			return 1;
		}
	}
}

module.exports = Pow;