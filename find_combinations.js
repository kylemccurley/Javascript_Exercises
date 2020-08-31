/*
  Write a function that calculates all combinations of r = 2 numbers for a given array. The function should return a multi-dimensional array containing pairs of 2 numbers.
  [1, 2, 3, 4] => [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 4], [3, 1], [3, 2], [3, 4], [4, 1], ...etc]


Bonus:
  Modify the function to process one more argument, r, to build pairs less than or greater than 2 pairs:

Input: Input of Number Elements
Output: All Possible Combinations of 2 Numbers

Rules/Requirements:
  - Default combination search is 2
  - Elements will always be a number
  - Combinations don't care about order ([1, 2] === [2, 1])
  - Allow for more than one value that's the same

Data Structure:
  - Arrays: Input, Output for representing the possible pairs of numbers 
  - Numbers: Elements of the arrays
  
Algorithm: Given an array of numbers: Recursive Solution
  - Initialize a local variable: outcome
    - Set to an empty array
  - Iterate from the first element to the last element of the array: |fixed|
    - Iterate from the first element to the last element of the array: |toCombine|
      - Check if (toCombine and fixed have the same index):
        - Yes? Move to the next loop
      - Else:
        - Push [fixed, toCombine] to the outcome array
  - Return outcome array
*/

function findCombinations(arr) {
  let numbers = arr.sort();
  let outcome = [];
  for (let fixedIdx in numbers) {
    let fixed = numbers[Number(fixedIdx)]
    for (let toCombineIdx = Number(fixedIdx) + 1; toCombineIdx < numbers.length; toCombineIdx++) {
      let toCombine = numbers[toCombineIdx];
      outcome.push([fixed, toCombine]);
    }
  }
  
  return outcome;
}


console.log(findCombinations([1, 2, 3, 4])); // [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 4], [3, 1], [3, 2], [3, 4]...etc]
console.log(findCombinations([4, 5, 6, 7, 8, 9])); // 

function equals(arr1, arr2) {
  if (!(arr1.length === arr2.length)) {
    return false;
  }

  for (let index = 0; index < arr1.length; index++) {
    let el1 = arr1[index];
    let el2 = arr2[index];
    if (!(el1 === el2)) {
      return false;
    }

    index++;
  }
  
  return true;
}
