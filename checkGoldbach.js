function isPrime(num) {
	var half = num / 2;
	if (num === 2 ) { return true; }
	if (num <= 1 || num % 2 === 0) { return false }

	for (var i = 3; i <= half; i += 1) {
		if (num % i === 0) { return false }
	}

	return true;
}

function rangePrime(min, max) {
	var primes =[];
	for (min; min <= max; min++) {
		if (isPrime(min)) { primes.push(min) }
	}

	return primes;
}

function checkGoldbach(n) {
	if (n % 2 !== 0 || n < 4) { 
		console.log(null);
		return; }

	var primes = rangePrime(2, n)
	var i = 0
	while(primes[i] <= n / 2) {
		var prime2 = n - primes[i];
		if (primes.includes(prime2)) { console.log(primes[i] + ' ' + prime2) }
		i++;
	}
}

checkGoldbach(100);
