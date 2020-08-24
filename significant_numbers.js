/*
You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: ["-", ":", ".."]

"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
"1-3, 1-2" --> 1, 2, 3, 11, 12
"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
"104-2" --> 104, 105, ... 112
"104-02" --> 104, 105, ... 202
"545, 64:11" --> 545, 564, 565, .. 611


Understanding The Problem:
  Input: String representation of numbers and range declaration
  Output: String of numbers separated by commas indicating the increasing range values.
  
  Rules/Requirements:
    - Range limits are inclusive
    - Numbers will always be in ascending order
    - Ranges will be separated by the given separator values: ['-', ':', '..']
    - What is a significant Number?
      - Number where the targetNumber ends in the significant number.
    - 
  
  Examples/Test Cases:
    console.log(ranges('1, 2-4, 5, 6'));
    console.log(ranges('ab, cd, ef, g, 1, 2, 3,'));
    console.log(ranges('1, 2, 3, 1, 2, 3'));
    console.log(ranges('1, 2, 3, 1-3'));

  Data Structures:
    String for the input
    Spliting between commas; turns into an array
    What is a range: A string element separated by the indicators (:, .., etc);
  
  Algorithm for finding all of the significant digits listed:
  Algorithm: Given a string separated by commas:
    Split the string between commas to find each element
    Iterate through each each element in the array
      If the element is a range:
        Convert range to an array of string elements
        Add the sub-array to the outcome array
      Otherwise, if the element is not a range:
        Add the element directly to the outcome array
*/

function ranges(str) {
  let significantNumbers = findSignificantNumbers(str);
  let calculatedNumbers = [];
  for (let sigNum of significantNumbers) {
    calculatedNumbers.push(findNum(calculatedNumbers, sigNum));
  }
  
  return calculatedNumbers.flat();
  
  function findSignificantNumbers(str) {
    let elements = str.split(', ');
    let significantNumbers = []; 
    for (let char of elements) {
      let el;
      if (isRange(char)) {
        el = calculateRange(char);
      } else {
        el = char;
      }

      significantNumbers.push(el);
    }
    
    return significantNumbers.flat();
  }
  
  function findNum(buffer, sig) {
    let targetNum = buffer[buffer.length - 1] || 0;
    for (let i = targetNum; i < 100; i++) {
      let numStr = String(i);
      if (numStr[numStr.length - 1] === sig) {
        return i;
      }
    }
  }
  
  function calculateRange(element) {
    let range = ((element).match(/[0-9]+/g));
    let start = Number(range[0]);
    let end = Number(range[1]);
    let rangeValues = [];
    for (let iterator = start; iterator <= end; iterator++) {
      rangeValues.push(String(iterator));
    }
    
    return rangeValues;
  }
  
  function isRange(str) {
    return !((str).match(/[^:..-]/g).length === 1);
  }
}

console.log(ranges('1, 2, 3, 4, 5'));
console.log(ranges('1, 2, 3, 1-4'));
console.log(ranges('1, 2, 3, 1, 2, 3'));
console.log(ranges('1, 2, 3, 1-3'));
