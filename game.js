//this is where prompt or inquirer will be
const inquirer = require('inquirer');
const Letter = require('./letter.js');
const Word = require('./word.js');
let guessesLeft = 10;
let gameCount = 26;
const gameWord = new Word();
const gameLetter = new Letter();

gameLetter.randomWord();

function runGame() {
   
    // if (guessesLeft > 0 || gameCount > 0) {
        inquirer.prompt([
            {
                type: "input",
                message: "Guess a Letter",
                name: "userGuess"
            }
        ]).then(function (answers) {
            console.log(`this is the answers ${answers.userGuess}`);
            gameWord.guess(answers.userGuess);
            // gameCount--;
            runGame();
        });
    // }
}

runGame();