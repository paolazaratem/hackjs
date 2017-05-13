/*
The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

Syntax
arr.slice()
arr.slice(begin)
arr.slice(begin, end)
*/

var output = extractElementsUpTo(['m', 'n', 'o', 'p', 'q'], 3) 
console.log(output); // --> ['m', 'n', 'o']

function extractElementsUpTo(array, n) {
  if(typeof array !== undefined && array !== null){
      return array.slice(0, n);
  }
}