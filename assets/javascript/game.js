// initiate variables
var winCount = 0;
var lossCount = 0;
var remainingGuesses = 9;
var usedGuesses = [];
var displayWC = document.getElementById("win-count");
var displayLC = document.getElementById("loss-count");
var displayRGC = document.getElementById("remaining-guess-count");
var displayUG = document.getElementById("used-guesses");
var alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

//Populate the screen
displayWC.textContent = winCount;
displayLC.textContent = lossCount;
displayRGC.textContent = remainingGuesses;
displayUG.textContent = "";



// Get the Initial Computer Guess
var computerGuess = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
console.log("Computer Guess:" + computerGuess);

// set guess boolean to false
var isCorrect = false;


document.onkeyup = function (event) {

    // get the user's guess
    var userGuess = event.key;

    // Look at the guess
    // See if the selection has been used already
    if (usedGuesses.indexOf(userGuess.toLowerCase()) != -1) {
        alert("You already Guessed that!");
    }
    // User was correct
    else if (userGuess.toLowerCase() === computerGuess) {
        isCorrect = true;
        remainingGuesses = 0;
    }
    // user was incorrect
    else {
        remainingGuesses--;
        displayRGC.textContent = remainingGuesses;
        usedGuesses.push(userGuess.toLowerCase())
        displayUG.textContent = arrayToCSV(usedGuesses);
    }

    // If remaningGuesses is 0, see if they won or lost.
    if (remainingGuesses === 0) {
        if (isCorrect === true) {
            winCount++;
        }
        else {
            lossCount++;
        }

        // Clear usedGuesses, clear the correct flag, reset remaining guesses and update the screen
        usedGuesses = [];
        remainingGuesses = 9;
        displayWC.textContent = winCount;
        displayLC.textContent = lossCount;
        displayRGC.textContent = remainingGuesses;
        displayUG.textContent = "";
        // get a new computer guess
        computerGuess = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
        console.log("Computer Guess:" + computerGuess);
    }
}






// This function will take an array and return it as a comma seperated string.
function arrayToCSV(inputArray) {
    var csvString = "";
    var iMax = inputArray.length;
    for (var i = 0; i < iMax; i++) {
        csvString += inputArray[i] + ", ";
    }
    // remove the extra ", " from the string's end
    csvString = csvString.substr(0, csvString.length - 2);
    return csvString;
}