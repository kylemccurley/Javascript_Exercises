/*

The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

Counting from the rightmost digit and moving left, double the value of every second digit
For any digit that thus become 10 or more, subtract 9 from the result
1111 becomes 2121
8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
Add all these digits together
1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.

Input: String of Digits and Spaces representing a number
Output: Boolean Value as to whether the number input is valid or not

Questions:
  Do I need to perform input validation?

Rules/Requirements:
  What is the Luhn formula:
    Step 1: Moving from right to left, double the value of every second digit
              If the doubled digit is larger than 9: Subtract 9 from the number
    Step 2: Find the sum of all of the staggered-doubled digits
    Step 3: Check if the sum of the staggered doubled digits are divisible by 10:
      Yes: Valid
      No: Not Valid
  - Ignore all non-numeric character in the input string
  
Data Structure:
  - Strings: For the input
             Split into individual checksum numbers
  - Numbers: For summing all of the sums from doubled digits
  - Array: For the split checksum numbers and for mapping the sums of the numbers

Algorithm: Given a string representing a number:
  - Match only digits within the string.
  - Split the string between spaces to find the checked numbers
  - Map each checksum number from the array: |number|
    - Double every second digit starting from the rightmost digit: Transformation/Mapping
    - Reduce the mapped numbers to the sum
    - Return the reduced outcome
  - Reduce the checksum numbers after mapping to the sum of the checked numbers
  - Return whether the reduced checksums are divisible by 10

Examples/Test Cases:
  Obvious Valid Case: 2436
  Obvious Invalid Case: 4223
  Double and Subtract when > 9; Valid: 9282
  Double and Subtract when > 9; Invalid: 7582
*/

function luhn(checkSums) {
  let chars = reverse(checkSums.match(/[0-9]+/g).join(''));
  let checkSum = chars.split('').map(doubleSecondDigits).reduce(sum);
  return (checkSum %  10 === 0);
  
  function sum(acc, digit) {
    return acc + digit;  
  }
  
  function doubleSecondDigits(digit, idx) {
    // Double For Every Odd Index
    let finalDigit = Number(digit);
    if (idx % 2 >= 1) {
      finalDigit *= 2;
    }
    
    if (finalDigit > 9) {
      return finalDigit - 9;
    } else {
      return finalDigit;
    }
  }
  
  function reverse(str){
    let reversedString = '';
    for (let idx = str.length - 1; idx >= 0; idx--) {
      reversedString += str[idx];
    }
    
    return reversedString;
  }
}

console.log(luhn("2323 2005 7766 3554"));
