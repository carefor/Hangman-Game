var allLetters, guessesLeft, words, messages, lettersGuessed, lettersMatched, listed;

function setup() {
allLetters = "abcdefghijklmnopqrstuvwxyz";
guessesLeft = 10;
words = ["Argentina", "Belgium", "Cyprus", "Finland", "Hungary", "Indonesia", "Jordan", "Kenya", "Kyrgyzstan", 
"Luxembourg", "Malta", "Mozambique", "Netherlands", "Switzerland", "Slovenia", "Thailand", "Turkey"];
messages = {
	win: 'Bon voyage! You win!! The answer is indeed ',
	lose: 'Hope you bought travel insurance.. You lost.',
	guessed: 'That letter has already been guessed. Try again!',
	validLetter: 'Please choose a letter from A-Z'
};

function randomSelector() {
	return Math.floor(Math.random() * words.length);
var chosenWord = words[randomSelector()]; 
}

document.onkeypress = function(event) {
	var dashes= " ";
	for (var i = 0; i < chosenWord.length; i++) {
		if(chosenWord.charAt(i) == " ") {
		dashes += " ";
		} else {
		dashes += "-";
		}
	}	
}

document.getElementById("listed").innerHTML = dashes;

var letter = String.fromCharCode(event.keyCode).toUpperCase();

document.getElementById("listed").value = ' ' ;

document.getElementById("counter").innerHTML = 'You have' + guessesLeft + 'guesses left';


function gameOver(win) {
	if (win) {
		document.getElementById("results").innerHTML = messages.win + wordChosen;
		document.getElementById("wins").innerHTML = 0++;
	} else {
		document.getElementById("results").innerHTML = messages.lose;
	}
}

if (letter) {
	if (allLetters.indexOf(letter) > -1) {
		if(lettersMatched && lettersMatched.indexOf(letter) > -1) || 
			(lettersGuessed && lettersGuessed.indexOf(letter) > -1){
			guessed.innerHTML = ' " ' + letter.toUpperCase() + ' " ' 
			+ alert(messages.guessed);
		}
	}

		else if (chosenWord.indexOf(letter) > -1) {
			var displayedLetters;
			displayedLetters = document.querySelectorAll("#listed" + letter.toUpperCase());
			
			for (var j = 0; j <chosenWord.length; j++) {
				if (chosenWord.charAt(j) === letter) {
				numLettersMattched += 1;
				}
			}
		}
			if (numLettersMatched === chosenWord.length) {
				gameOver(true);	
				lettersMatched += letter;			}
			else {
				lettersGuessed += letter;
				guessesLeft--;
				counter.innerHTML = 'You have' + guessesLeft + 'guesses left';
				if (guessesLeft === 0) gameOver();
			}	 	

	 		else {
	 			alert(messages.validLetter);
	 		}

			return false;
}
 };