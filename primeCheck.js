function isPrime(num) {
	var half = num / 2;
	if (num === 2 ) { return true; }
	if (num <= 1 || num % 2 === 0) { return false; }

	for (var i = 3; i <= half; i += 1) {
		if (num % i === 0) { return false; }
	}

	return true;
}

function rangePrime(min, max) {
	for (min; min <= max; min++) {
		if (isPrime(min)) {
			console.log(min);
		}
	}
}

console.log(isPrime(4));
rangePrime(0, 200);