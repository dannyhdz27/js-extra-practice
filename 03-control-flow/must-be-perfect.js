// Must Be Perfect
// Given a string value word, set the lastWord variable to:

// the upper-cased string stored in word if the word starts with the letter p and has a length of 7
// the unmodified string stored in word
// For example, if the word is equal to 'apples', lastWord should be equal to 'apples'.
// If the word is equal to 'perfect', 'lastWord' should be equal to 'PERFECT'.

let word = "carrots";
// let word = 'pacific';
// let word = 'perfecto';
// let word = 'perfect';

let lastWord;

// YOUR CODE BELOW
if(word.charAt(0)==='p' && word.length() === 7){
lastWord = word.toUpperCase()

} else{
    lastWord = word
}


// Do not the the code below
module.exports = { word, lastWord };
