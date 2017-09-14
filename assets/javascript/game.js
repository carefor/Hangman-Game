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

var randomIndex = Math.floor( Math.random()*(wordList.length - 1) );
var chosenWord = wordList[randomIndex];
var dashedWord = new Array(chosenWord.length);

var activeWord = document.getElementById("active-word");
var resultsArea = document.getElementById("results");

var keyChar = "";

var success = false;
var gameWon = false;

var mistakeCounter = 7;
var winsCounter = 0;

//replaces each letter (index) with a dash
for (var i = 0; i < dashedWord.length; i++){
   dashedWord[i] = "_ ";
}

//prints the dashed word on the screen
   function displayWord() {
      for (var i = 0; i < dashedWord.length; i++){
        activeWord.innerHTML = dashedWord.join("");
        console.log("The word is " + chosenWord.join(""));
      }
  }
    displayWord();

//compares if key pressed is in the word
 function compareLetter() {
      for (var i = 0; i < chosenWord.length; i++){
        var keyChar = event.key.toUpperCase();
           if(chosenWord[i] === keyChar){
               success = true;
               console.log(keyChar + " is in " + chosenWord.join(""));
            }
         else if(chosenWord[i] !== keyChar){
               success = false;
               console.log(keyChar + " is not in " + chosenWord.join(""));
             }
          }
        }

       //if key pressed is in word it prints it to the screen
      // function letterMatches() {
        //activeWord = document.getElementById("active-word");
        //keyChar = event.key.toUpperCase();
        //activeWord[i].appendChild(keyChar); 
       //}
       

      //wrong guesses result in letter printed to screen and wrong guess counter decreased
    function wrongGuess() {
      if(success = false){
      keyChar = event.key.toUpperCase();
      var guessedLetter = document.getElementById("guessed");
      var repLetter = document.createTextNode(keyChar);
      guessedLetter.appendChild(repLetter); 
      mistakeCounter--;
      var guessCounter = document.getElementById("guess-counter");
      var guessesLeft = document.createTextNode(mistakeCounter);
      guessCounter.appendChild(guessesLeft);
       }
     }

//reads if all dashes have been replaced with letters and so if game is ongoing
//function gameOngoing() {
  //    for (var i = 0; i < dashedWord.length; i++){
    //     if(dashedWord[i] === "_ "){
      //   gameWon = false;
        // }
         //else if(dashedWord[i] !== "_ "){
          //gameWon = true;
         //}
      //}
    //}

//if win, displays text and increases wins counter
//function winningGame() {
  // if(gameWon = true){
    //  var winText = document.createTextNode("Bon voyage! You win!! The answer is indeed " + chosenWord.join(""));
     // resultsArea.appendChild(winText);
     // winsCounter++;
     // var wins = document.getElementById("wins");
     // var displayWins = document.createTextNode(winsCounter);
     // wins.appendChild(displayWins);
  // }
 //}

//if run out of guesses, 'you lost' message displayed
function losingGame() {
   if(mistakeCounter === 0) {
      resultsArea.innerHTML = "Hope you bought travel insurance.. You lost.";
    }
  }

//recognizes key pressed and runs functions
    document.onkeypress = function (event) {
      keyChar = event.key.toUpperCase();
          compareLetter();
          //letterMatches();
          wrongGuess();
          //gameOngoing() 
         // winningGame();
          }
        

