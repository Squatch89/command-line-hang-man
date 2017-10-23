const wordChoices = ["banana", "apple", "carrot", "cheese", "pear"];
const wordToGuess = wordChoices[Math.floor(Math.random() * (wordChoices.length))];
let wins = 0;
let losses = 0;
let chances = 10;
let underscore;

function Letter() {
    
    this.chances = chances;
    this.wordToGuess = wordToGuess;
    this.underscore = underscore;
    
    this.randomWord = function () {
        console.log(wordToGuess);
        //this is going to take in the word and convert it to _ _ _ _ _
        this.underscore = Array.from('_'.repeat(this.wordToGuess.length));
        // console.log(underscore.join(' '));
    };
    
    
    
    //will compare the guess supplied by the user to the selected word
    //if the letter guessed is in the word replace the _ with the letter
    //if the guess is not in the word lose a guess
    this.userGuess = function (guess) {
        const splitWord = wordToGuess.split("");
        console.log(`this is the split word from letter.js ${splitWord}`);
        
        if (splitWord.includes(guess) === true) {
            for (let i = 0; i < splitWord.length; i++) {
                if (splitWord[i] === guess) {
                    this.underscore.splice(i, 1, guess);
                    // console.log(underscore[i]);
                    // console.log(underscore.join(' '));
                }
            }
            console.log(this.underscore.join(' '));
        }
        else {
            this.chances--;
            console.log(`Guesses Left: ${this.chances}`);
            if (this.chances === 0) {
                losses++;
                console.log(`Losses: ${losses}`);
            }
        }
        
        if (this.underscore.join("") === this.wordToGuess) {
            wins++;
            console.log(`Wins: ${wins}`);
        }
    }
}

//creates a random number to select an index in my wordToGuess array

// const testLetter = new Letter();

// testLetter.randomWord();
//
// testLetter.userGuess("a");


module.exports = Letter;

