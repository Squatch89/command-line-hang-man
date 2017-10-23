const wordChoices = ["banana", "apple", "carrot", "cheese", "pear"];
const wordToGuess = wordChoices[Math.floor(Math.random() * (wordChoices.length))];
let underscore;
let wins = 0;
let losses = 0;
let guesses = 10;

function Letter() {
    
    this.randomWord = function () {
        console.log(wordToGuess);
        //this is going to take in the word and convert it to _ _ _ _ _
        underscore = Array.from('_'.repeat(wordToGuess.length));
        // console.log(underscore.join(' '));
    };
    
    //will compare the guess supplied by the user to the selected word
    //if the letter guessed is in the word replace the _ with the letter
    //if the guess is not in the word lose a life
    this.userGuess = function (guess) {
        const splitWord = wordToGuess.split("");
        console.log(`this is the split word from letter.js ${splitWord}`);
        
        if (splitWord.includes(guess) === true) {
            for (let i = 0; i < splitWord.length; i++) {
                if (splitWord[i] === guess) {
                    underscore.splice(i, 1, guess);
                    // console.log(underscore[i]);
                    // console.log(underscore.join(' '));
                }
            }
            console.log(underscore.join(' '));
        }
        else {
            guesses--;
            console.log(guesses);
        }
        
        
        if (underscore.join("") === wordToGuess) {
            wins++;
            console.log(`Wins: ${wins}`);
        }
        
        
    }
    
}

//creates a random number to select an index in my wordToGuess array

const testLetter = new Letter();

// testLetter.randomWord();
//
// testLetter.userGuess("a");

module.exports = Letter;