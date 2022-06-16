'use strict';

function makeUnique(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
const names = ['lisa', 'lisa', 'priscilla', 'tania', 'priscilla', 'nadia', 'nadia', 'nadia'];
const numbers = [22, 22, 34, 30, 30, 30, 22, 15, 12, 29, 29, 28, 29];  


const uniqueValues = makeUnique(values);
const uniqueNames = makeUnique(names);
const uniqueNumbers = makeUnique(numbers);

console.log(uniqueValues, uniqueNames, uniqueNumbers);


// Another SHORTER option is: 
// let newArr = [... new Set(arr)];
// return newArr;

// Do not change or remove anything below this line
module.exports = makeUnique;