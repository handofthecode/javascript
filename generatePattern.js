function generatePattern(n) {
	for (var i = 1; i <= n; i++) {
		var fewerStars = i - 9;
		if (fewerStars < 0) { fewerStars = 0 }
		var extraStars = (n - 9) * 2;
		if (Math.abs(extraStars) !== extraStars) { extraStars = 0 }

		var starsNum = n - i + extraStars - fewerStars;
		var stars = '';
		while (starsNum) {
			stars = stars + '*';
			starsNum--;
		}
		var iTemp = i;
		var numbers = '';
		while (iTemp) {
			numbers = iTemp + numbers;
			iTemp--;
		}

		console.log(numbers + stars);
	}
}

	generatePattern(20);