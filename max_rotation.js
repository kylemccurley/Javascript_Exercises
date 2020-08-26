/*
Given a number, calculate the maximum rotation of that number

  Rules/Requirements:
    - What is the maximum rotation:
      - Rotate all digits
      - Keep the first digit fixed, rotate again
      - Re-assign the number to a new value
      - Keep the first 2 digits fixed, rotate again
      - Repeat
    - Trim the zero:
      - Regex can trim any leading 0: Only match digits 1 through 9
  
  Data Structure:
    - Return Value of Rotate Rightmost Digits: Number of rotated digits
      - Input: Number, digits
      - Set number of digits initially to the size of the number
  
  Algorithm: Given a number: num
    - Initialize a local variable: outcome
    - Iterate from num length downto 1: |digitNum|
      - Assign outcome to return value of rotateRightmost(outcome, digitNum):
    - Return outcome
*/

function maxRotation(num) {
  let outcome = num;
  let length = String(num).length;
  for (let digitNum = length; digitNum > 0; digitNum--) {
    outcome = rotateRightmostDigits(outcome, digitNum);
  }
  
  return outcome;

  function rotateRightmostDigits(number, n) {
    const numberString = String(number);
    const firstPart = numberString.slice(0, numberString.length - n);
    const secondPart = numberString.slice(numberString.length - n);
    const resultString = firstPart + rotateString(secondPart);
    return Number(resultString);
  }

  function rotateString(string) {
    return string.slice(1) + string[0];
  }
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
