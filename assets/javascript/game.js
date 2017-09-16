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

var randomIndex = Math.floor(Math.random() * (wordList.length - 1));
var chosenWord = wordList[randomIndex];
var dashedWord = new Array(chosenWord.length);
var isSame = true;

var activeWord = document.getElementById("active-word");
var resultsArea = document.getElementById("results");

var keyChar = "";

var mistakeCounter = 7;
var winsCounter = 0;

//replaces each letter (index) with a dash
for (var i = 0; i < dashedWord.length; i++) {
    dashedWord[i] = "_ ";
}

//prints the dashed word on the screen
function displayWord() {
        activeWord.innerHTML = dashedWord.join("");
        console.log("The word is " + chosenWord.join(""));
}
displayWord();

//compares if key pressed is in the word
function compareLetter(keypress) {
    var keyChar = keypress;
    var isCorrectGuess = false;
    if (chosenWord.indexOf(keyChar) === -1) {
        return isCorrectGuess;
    } else {
        return chosenWord.indexOf(keyChar);
    }
}

//if key pressed is in word it prints it to the screen
function letterMatches(attempt, keyChar) {
    for (var i = 0; i < dashedWord.length; i++) {
    dashedWord[attempt] = keyChar;
    activeWord.innerText = dashedWord.join("");
  }
}

//wrong guesses result in letter printed to screen and wrong guess counter decreased
function wrongGuess(keyChar) {
    var guessesDisplay = document.getElementById("guessed");
    var repLetter = document.createTextNode(keyChar);
    guessesDisplay.appendChild(repLetter);
    mistakeCounter--;
    console.log("guesses left: ", mistakeCounter, ";", "wrong letter: ", keyChar);
    var guessCounter = document.getElementById("guess-counter");
    guessCounter.innerHTML = mistakeCounter.toString();
}

//if run out of guesses, game lost message displayed
function gameLost() {
  if (mistakeCounter === 0) {
    console.log("Too many mistakes were made. Game over");
    alert("Too many tries, you lose!");
    var resultsArea = document.getElementById("results");
    var loseText = "Hope you bought travel insurance.. You lost.";
    resultsArea.innerHTML = loseText;
  }
}

//if win, displays text and increases wins counter
function gameWon() {
var allMatch = true;
  for (var i = 0; i < dashedWord.length; i++){
    if(dashedWord[i] === "_ "){
      allMatch = false;
    }
  }
  if(allMatch){
    console.log("Game won");
    winsCounter++;
    var resultsArea = document.getElementById("results");
    var winText = "Bon voyage! You win!! The answer is indeed " + chosenWord.join("");
    resultsArea.innerHTML = winText;
    var winsDisplay = document.getElementById("wins");
    winsDisplay.innerHTML = winsCounter.toString();
   }
}

//recognizes key pressed and runs functions
document.onkeypress = function(event) {
    keyChar = event.key.toUpperCase();
    var attempt = compareLetter(keyChar);
    if (attempt !== false) {
        letterMatches(attempt, keyChar);
    } else {
        wrongGuess(keyChar);
    }
    gameLost();
    gameWon();
}