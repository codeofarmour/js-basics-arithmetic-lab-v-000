/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
const newID = 1000000000 + oldID;
const ageIsValid = Number.isInteger(currentAge);
const randomNumber = Math.floor(Math.random() * 20);
const randomInteger = Math.round(randomNumber);
const randomUserID = randomInteger + Math.random() * (1000000019 - 1000000001) + 1;
