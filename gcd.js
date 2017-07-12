function gcd(large, small) {
	var remainder = large % small;

	while (true) {
		if (remainder === 0) { return small }
		large = small;
		small = remainder;
		remainder = large % small;
	}
}

function gcdArray(numbers) {
 	var one; var two;
 	while (true) {
 		[one, two] = numbers.splice(0, 2);
	  numbers.push(gcd(one, two));
	 	
	 	if (numbers.length === 2) {
	 		[one, two] = numbers.splice(0, 2);
			return gcd(one, two);
		}
 	}
}

console.log(gcd(25, 155));
console.log(gcdArray([90, 150, 60, 1500, 105]))