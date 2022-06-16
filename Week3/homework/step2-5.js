'use strict';

function multiplyAll(arr) {
  // eslint-disable-next-line
  let product = 1;

  for (let i = 0; i < arr.length; i++){
    const subArray = arr[i];
    for (let y = 0; y < subArray.length; y++){
      product *= arr[i][y];
      console.log(arr, product)
    }
  }
  return product;
}

const result = multiplyAll([[1, 2], [3, 4], [5, 6]]);
console.log(result);

// Do not change or remove anything below this line
module.exports = multiplyAll;
