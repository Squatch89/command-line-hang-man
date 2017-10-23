// //this is where inquirer will be
// const inquirer = require('inquirer');
// const Letter = require('./letter.js');
// const Word = require('./word.js');
// let guessesLeft = 10;
// let gameCount = 26;
// const gameWord = new Word();
// const gameLetter = new Letter();
//
// gameLetter.randomWord();
//
//
//
//
// function runGame() {
//     console.log(gameLetter.chances);
//     if (gameLetter.chances >= 0) {
//         inquirer.prompt([
//             {
//                 type: "input",
//                 message: "Guess a Letter",
//                 name: "userGuess"
//             }
//         ]).then(function (answers) {
//             console.log(`this is the answers ${answers.userGuess}`);
//             gameWord.guess(answers.userGuess);
//             runGame();
//         });
//     }
//     else {
//         inquirer.prompt([
//             {
//                 type: "input",
//                 message: "Sorry you lost. Would you like to play again? y/n ",
//                 name: "play"
//             }
//         ]).then(function(answers) {
//             if (answers.play === "y") {
//                 gameLetter.randomWord();
//                 runGame();
//             }
//             else {
//                 console.log("Thank you for playing");
//             }
//         })
//     }
// }
//
// runGame();
