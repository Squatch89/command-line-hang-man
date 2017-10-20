const wordChoices = ["Banana", "Apple", "Carrot", "Cheese", "Pear"];
const wordToGuess = wordChoices[Math.floor(Math.random() * (wordChoices.length))];

function Letter(randomWord) {
    this.randomWord = function() {
        console.log(wordToGuess);
    
        //this is going to take in the word and convert it to _ _ _ _ _
        const underscore = Array.from('_'.repeat(wordToGuess.length));
        console.log(underscore.join(' '));
    }
    
}

//creates a random number to select an index in my wordToGuess array


const testLetter = new Letter();

testLetter.randomWord();

module.exports = Letter;