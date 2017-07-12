function guessPassword() {
	var password = "chicken";
	var guesses = 0;
	var guess;

	while (guesses < 3) {
		guess = prompt("What is the password?");
		if (guess === password) { break; }
		guesses++;
	}

	if (guess === password) { 
		console.log("You have been denied access.") }
	else {
		console.log("You have successfully logged in.")
	}
}

guessPassword();