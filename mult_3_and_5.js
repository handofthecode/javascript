function multiplesOfThreeAndFive(min, max) {
	for (i = min; i <= max; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log(String(i) + '!');
		}
		else if (i % 3 === 0) {
			console.log(i);
		}
		else if (i % 5 === 0) {
			console.log(i);
		}
	}
}

multiplesOfThreeAndFive(6, 200);