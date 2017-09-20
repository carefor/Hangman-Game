"use strict";

//declaring variables
var wordList = [
    ["A", "R", "G", "E", "N", "T", "I", "N", "A"],
    ["B", "E", "L", "G", "I", "U", "M"],
    ["C", "Y", "P", "R", "U", "S"],
    ["F", "I", "N", "L", "A", "N", "D"],
    ["H", "U", "N", "G", "A", "R", "Y"],
    ["I", "N", "D", "O", "N", "E", "S", "I", "A"],
    ["J", "O", "R", "D", "A", "N"],
    ["K", "E", "N", "Y", "A"],
    ["K", "Y", "R", "G", "Y", "Z", "S", "T", "A", "N"],
    ["L", "U", "X", "E", "M", "B", "O", "U", "R", "G"],
    ["M", "A", "L", "T", "A"],
    ["M", "O", "Z", "A", "M", "B", "I", "Q", "U", "E"],
    ["N", "E", "T", "H", "E", "R", "L", "A", "N", "D", "S"],
    ["S", "W", "I", "T", "Z", "E", "R", "L", "A", "N", "D"],
    ["S", "L", "O", "V", "E", "N", "I", "A"],
    ["T", "H", "A", "I", "L", "A", "N", "D"],
    ["T", "U", "R", "K", "E", "Y"]
]

var winningImages = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
]

var randomIndex = Math.floor(Math.random() * (wordList.length - 1));
var chosenWord = wordList[randomIndex];
var dashedWord = new Array(chosenWord.length);

var isSame = true;
var wrongsArray = [];

var startText = document.getElementById("start-text");
var activeWord = document.getElementById("active-word");
var guessCounter = document.getElementById("guess-counter");
var guessesDisplay = document.getElementById("guessed");
var wrongsList = document.getElementById("wrongs-list");
var resultsArea = document.getElementById("results");

var keyChar = "";
var startMsg = "Press any key to begin!";
var winText = "Bon voyage! You win!! The answer is indeed " + chosenWord.join("");

var mistakeCounter = 7;
var winsCounter = 0;

//replaces each letter (index) with a dash
//prints the dashed word on the screen
function displayWord() {
    randomIndex = Math.floor(Math.random() * (wordList.length - 1));
    chosenWord = wordList[randomIndex];
    dashedWord = new Array(chosenWord.length);
    for (var i = 0; i < dashedWord.length; i++) {
        dashedWord[i] = "_ ";
    }
    activeWord.innerHTML = dashedWord.join("");
    console.log("The word is " + chosenWord.join(""));
    startText.innerHTML = startMsg;
}
displayWord();

//compares if key pressed is in the word
function compareLetter(keypress) {
    var keyChar = keypress;
    var check_array = [];
    for (var i = 0; i < chosenWord.length; i++) {
      if(keyChar === chosenWord[i]){
        check_array.push(i);
      } 
    }
    if(check_array.length >0){
      return check_array;
    } else {
      return false;
    }
}

//if key pressed is in word it prints it to the screen
function letterMatches(attempt_arr, keyChar) {
    if (dashedWord.indexOf(keyChar) !== -1) {
        alert("You've already used this letter. Try again!");
    }
    for(var i = 0; i < attempt_arr.length; i++){
      var a = attempt_arr[i];
      dashedWord[a]= keyChar;
    }
 activeWord.innerHTML = dashedWord.join("");
}

//wrong guesses result in letter printed to screen and wrong guess counter decreased
function wrongGuess(keyChar) {
    if (wrongsArray.includes(keyChar)) {
        alert("You've already tried this letter. Guess again!");
    }
    mistakeCounter--;
    console.log("guesses left: ", mistakeCounter, ";", "wrong letter: ", keyChar);
    guessCounter.innerHTML = mistakeCounter.toString();
}

//if run out of guesses, game lost message displayed
function gameLost() {
    if (mistakeCounter === 0) {
        console.log("Too many mistakes were made. Game over");
        var resultsArea = document.getElementById("results");
        var loseText = "Hope you bought travel insurance.. You lost.";
        resultsArea.innerHTML = loseText;
        setTimeout(resetGame, 3000);
    }
}

//if win, displays text and increases wins counter
function gameWon() {
    var allMatch = true;
    for (var i = 0; i < dashedWord.length; i++) {
        if (dashedWord[i] === "_ ") {
            allMatch = false;
        }
    }
    if (allMatch) {
        console.log("Game won");
        winsCounter++;
        var winText = "Bon voyage! You win!! The answer is indeed " + chosenWord.join("");
        var resultsArea = document.getElementById("results");
        resultsArea.innerHTML = winText;
        var winsDisplay = document.getElementById("wins");
        winsDisplay.innerHTML = winsCounter.toString();
        setTimeout(resetGame, 3000);
    }
}

function resetGame() {
    displayWord();
    mistakeCounter = 7;
    guessCounter.innerHTML = mistakeCounter.toString();
    wrongsArray = [];
    guessesDisplay.innerHTML = wrongsArray.toString();
    startMsg = "Press any key to start!";
    startText.innerHTML = startMsg;
    winText = "";
    resultsArea.innerHTML = winText;
}

//recognizes key pressed and runs functions
document.onkeypress = function(event) {
    keyChar = event.key.toUpperCase();
    var testValid = new RegExp('[A-Z]');
    var isValid = testValid.test(keyChar);
    if (isValid === false) {
        alert("Invalid key. Please try letters only");
    } else if (keyChar === "ENTER") {
        alert("Invalid key. Please try letters only");
        return false;
    }
    if (isValid !== false) {
        startMsg = "";
        startText.innerHTML = startMsg;
        var attempt = compareLetter(keyChar);
        if (attempt !== false) {
            letterMatches(attempt, keyChar);
        } else {
            wrongGuess(keyChar);
            if (wrongsArray.indexOf(keyChar) === -1) {
                wrongsArray.push(keyChar);
                var guessText = "Foreign letters:";
                guessesDisplay.innerHTML = guessText;
                var wrongs = wrongsArray.toString();
                wrongsList.innerHTML = wrongs;
            }
        }
    }
    gameLost();
    gameWon();
}