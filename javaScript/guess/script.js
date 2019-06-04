var secretNumber = 4;

var userGuess = Number(prompt("Guess a number?"));

if(Number(userGuess) === secretNumber){
	alert("You got it right!");
}

else if(userGuess > secretNumber) {
	alert("Too High. Guess Again!");
}

else {
	alert("Too Low. Guess Again!");
}
