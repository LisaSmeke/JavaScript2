'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [...Array(stopIndex - startIndex + 1).keys()].map(x => x + startIndex);
  console.log(numbers);

  numbers.forEach(number => {
    if (number % 3 === 0) threeCallback(number);
    if (number % 5 === 0) fiveCallback(number);
  });
}

function sayThree(number) {
  console.log(`${number} is divisible by 3 🧮`);
}

function sayFive(number) {
  console.log(`${number} is divisible by 5 🧮`);
}
threeFive(10, 15, sayThree, sayFive);
threeFive(9, 22, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;