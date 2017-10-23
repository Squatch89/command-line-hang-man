const inquirer = require('inquirer');
const Letter = require('./letter.js');
const gameLetter = new Letter();
let guessedLetters = [];
const allowedChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

gameLetter.randomWord();

function Word() {
    
    this.guess = function(guess) {
        console.log(`this is the userGuess log from word.js ${guess}`);
        console.log(`these are the guessed letters form word.js ${guessedLetters}`);
        if ( guessedLetters.indexOf(guess) < 0 && allowedChoices.indexOf(guess) >= 0) {
            gameLetter.userGuess(guess);
            guessedLetters.push(guess);
        }
    }

}

const gameWord = new Word();

function runGame() {
    if (gameLetter.chances > 0) {
        inquirer.prompt([
            {
                type: "input",
                message: "Guess a Letter",
                name: "userGuess"
            }
        ]).then(function (answers) {
            console.log(`this is the answers ${answers.userGuess}`);
            gameWord.guess(answers.userGuess);
            runGame();
            if (gameLetter.underscore.join("") === gameLetter.wordToGuess) {
                inquirer.prompt([
                    {
                        type: "input",
                        message: "Yay you won!. Would you like to play again? y/n ",
                        name: "play"
                    }
                ]).then(function(answers) {
                    if (answers.play === "y") {
                        gameLetter.randomWord();
                        gameLetter.chances = 10;
                        guessedLetters = [];
                        runGame();
                    }
                    else {
                        console.log("Thank you for playing");
                    }
                })
            }
        });
    }
    else {
        inquirer.prompt([
            {
                type: "input",
                message: "Sorry you lost. Would you like to play again? y/n ",
                name: "play"
            }
        ]).then(function(answers) {
            if (answers.play === "y") {
                gameLetter.randomWord();
                gameLetter.chances = 10;
                guessedLetters = [];
                runGame();
            }
            else {
                console.log("Thank you for playing");
            }
        })
    }
}

runGame();


// const testWord = new Word ();

// testWord.guess(userGuess);

// module.exports = Word;