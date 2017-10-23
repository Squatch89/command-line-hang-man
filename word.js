const Letter = require('./letter.js');


// const userGuess = process.argv[2];
const guessedLetters = [];
const allowedChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function Word() {
    
    this.guess = function(guess) {
        const userLetter = new Letter();
        // userLetter.randomWord();
        console.log(`this is the userGuess log from word.js ${guess}`);
        console.log(`these are the guessed letters form word.js ${guessedLetters}`);
        if ( guessedLetters.indexOf(guess) < 0 && allowedChoices.indexOf(guess) >= 0) {
            userLetter.userGuess(guess);
            guessedLetters.push(guess);
        }
    }

}

const testWord = new Word ();

// testWord.guess(userGuess);

module.exports = Word;