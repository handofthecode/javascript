function add(a, b) { return a + b; }

function average(numbers) {
	return numbers.reduce(add, 0) / numbers.length;
}

function calculateGrade(scores) {
	avg = average(scores);

	switch (true) {
		case avg < 50:
			return 'F';
		case avg < 70:
			return 'C';
		case avg < 90:
			return 'B';
		default:
			return 'A';
	}
}

function gradeStudent() {
	var scores = [];
	var temp;
	while (true) {
		temp = prompt('Enter scores. Type "done" when finished.');
		if (temp === 'done') { break; }
		scores.push(Number(temp));
	}
		
	grade = calculateGrade(scores) + '.'
	result = 'Based on the average of your scores your letter grade is ' + grade;
	console.log(result);
}

gradeStudent();