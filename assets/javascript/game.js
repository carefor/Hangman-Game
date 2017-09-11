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

var randomIndex = Math.floor((Math.random()*(wordList.length-1)));

var chosenWord = wordList[randomIndex];
var dashedWord = new Array(chosenWord.length);
var mistake = 0;

for (var i = 0; i < dashedWord.length; i++){
	dashedWord[i] = "_ ";
}

function displayWord(){
	for (var i = 0; i < dashedWord.length; i++){
	var activeWord = document.getElementById("active-word");
	var letter = document.createTextNode(dashedWord[i]);
	activeWord.appendChild(letter);
	}
}


