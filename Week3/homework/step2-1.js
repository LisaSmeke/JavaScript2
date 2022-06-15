'use strict';

function foo(func) {
  console.log('Hi bar!');
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar());

// Do not change or remove anything below this line
module.exports = foo;
