const wordChoices = ["Banana", "Apple", "Carrot", "Cheese", "Pear"];
const wordToGuess = wordChoices[Math.floor(Math.random() * (wordChoices.length))];

function Letter(guess) {
    this.guess = guess;
    
    this.randomWord = function() {
        console.log(wordToGuess);
        //this is going to take in the word and convert it to _ _ _ _ _
        const underscore = Array.from('_'.repeat(wordToGuess.length));
        console.log(underscore.join(' '));
    };
    
    //will compare the guess supplied by the user to the selected word
    //if the letter guessed is in the word replace the _ with the letter
    //if the guess is not in the word lose a life
    this.userGuess = function(guess) {
    
    }
    
}

//creates a random number to select an index in my wordToGuess array

const testLetter = new Letter(guess);

testLetter.randomWord();

module.exports = Letter;