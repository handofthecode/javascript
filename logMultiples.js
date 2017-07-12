function logMultiples(num) {
	for (i = 100; i >= 1; i--) {
		if (i % 2 === 1 && i % num === 0) {
			console.log(i);
			
			while (i > 0) {
				i -= num;
				if (i % 2 === 1) {
					console.log(i);
				}
			}	
		}
	}
}
logMultiples(7);