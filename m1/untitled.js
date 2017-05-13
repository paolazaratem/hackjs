/*
Write a function called "extractElementsUpTo".

Given an array and a index, "extractElementsUpTo", returns an array with all the elements up until, but not including, the element at the given index.

Notes:
* In order to do this you should be familiar with the 'slice' method.

*/

var output = extractElementsUpTo(['m', 'n', 'o', 'p', 'q'], 3) 
console.log(output); // --> ['m', 'n', 'o']

function extractElementsUpTo(array, n) {
  if(typeof array !== undefined && array !== null){
      return array.slice(0, n);
  }
}