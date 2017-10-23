//this is where prompt or inquirer will be
const inquirer = require('inquirer');
const Letter = require('./letter.js');
const Word = require('./word.js');
let guessesLeft = 10;

function runGame() {
    if (guessesLeft > 10 || /*something else related to word length */) {
        inquirer.prompt([
            {
                type: "input",
                message: "Guess a Letter",
                name: "userGuess"
            }
        ]).then(function (answers) {
            console.log(answeres);
            runGame();
        });
    }
}