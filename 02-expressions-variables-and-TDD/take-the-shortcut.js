// Take the Shortcut
// Given a starting value assigned to the happyNum variable, use at least three of the following operators to reassign the value in happyNum until it is equal to 5:

/*  +=
    -=
    *=
    /=
    ++
*/

let happyNum = 1000;


// YOUR CODE BELOW
happyNum /= 10;
happyNum -= 99;
happyNum += 3;
happyNum ++;


// Do not change the code below
module.exports = { happyNum };
