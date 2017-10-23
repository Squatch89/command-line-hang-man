const Letter = require('./letter.js');


const userGuess = process.argv[2];
const guessedLetters = [];
const allowedChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function Word() {
    
    this.guess = function(guess) {
        const userLetter = new Letter();
        userLetter.randomWord();
        console.log(userGuess);
        console.log(guessedLetters);
        if ( guessedLetters.indexOf(userGuess) < 0 && allowedChoices.indexOf(userGuess) >= 0) {
            userLetter.userGuess(guess);
            guessedLetters.push(userGuess);
        }
    }

}

const testWord = new Word ();

testWord.guess(userGuess);

module.exports = Word;