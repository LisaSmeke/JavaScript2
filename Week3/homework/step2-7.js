'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
// The variable in the first function is a number, while the variable in the second function is an object. 
// f1 doesn't call the value of x, that's why when we console.log x, we get the value of that constant (9)
// f2 calls the value of x and makes an operation, thus resulting in a new object "{x :10}"

