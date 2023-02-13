// Last Character
// Define a function lastCharacter that accepts two strings as arguments.
// lastCharacter should return true if both strings end with the same character.
// Otherwise, lastCharacter should return false.

// Example:
// lastCharacter('apples', 'pumpkins'); // => true
// lastCharacter('marker', 'pen'); // => false

// YOUR CODE BELOW
function lastCharacter(string1, string2){
    if(string1.charAt(string1.length -1) === string2.charAt(string2.length -1)){
       return true 
    }else{
        return false
    }
}

// Do not change the code below
module.exports = { lastCharacter };
