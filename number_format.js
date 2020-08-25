/*
Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:

If the phone number is less than 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
If the phone number is 11 digits and the first number is not 1, then it is a bad number.
If the phone number is more than 11 digits, assume that it is a bad number.
For bad numbers, just a return a string of 10 0s.
 
Input: Phone number as a string
Output: New String of the Cleaned Up Phone Number

Rules/Requirements: 
  - If the number is less than 10 digits, it is a bad number
  - If the number is 10 digits, assume it is good
  - Is the number is 11 digits, and the first number is 1:
    - Trim the 1 from the number, use the last 10 digits.
  - If the number is 11 digits and the first number is not 1, the it is a bad number
  - If the phone number is more than 11 digits, assume it is a bad number

  - If the number is a bad number:
    - Return a string of 10 0's
  
  - How do I check if the number is a bad number?
    - Check 1: Is the length < 10?
    - Check 2: Is the length === 11 and first number is not a 1
    - Check 3: Is the length > 11?

  Formatting the number:
    - (areacode) first 3 - last 4

Data Structure:
  - String: Input phone number string, unformatted (input) and formatted (output);
  
Algorithm: Given a string representing a phone number:
    If the length of the string is === 11 and first number is 1:
      Trim the string from index 1 to the end of the string
      Format the trimmed string
    If the input string's length is === 10
      Format the number
    Otherwise:
      Return '0000000000'
    
  Formatting the number:
    - Reference the string from index 0 to index 2: areacode
    - Reference the string elements from index 3 to 5: first
    - Referene the string elements from index 6 to 9: second
    - Return: (areacode) first-second

  Functions:
    - Main: Check raw input, make adjustments to string, pass string to the 10 digit string
    - Format: Format 10 digit string
 
  Examples/Test Cases:
    - Example 1: 4342665212 -> (434) 426-2122: Obvious Result
    - Example 2: 14344262122 -> (434) 426-2122: Trim 1 and format elements from index 1 onward
    - Example 3: 426212 -> 0000000000: Return a string of 10 0's when the input it invalid (Length <10)
    - Example 4: 43442621222 -> 0000000000: Return a string of 10 0's when the input is invalid (>10 && no 1)
    
  */

function formatNumber(str) {
  if (str.length === 11 && str[0] === '1') {
    return format(str.slice(1));
  } else if (str.length === 10) {
    return format(str);
  } else {
    return '0000000000';
  }
  
  function format(strNum) {
    let areaCode = strNum.slice(0, 3);
    let first = strNum.slice(3, 6);
    let second = strNum.slice(6, 10);
    return (`(${areaCode}) ${first}-${second}`)
  }
}

console.log(formatNumber('4344262122') === '(434) 426-2122');
console.log(formatNumber('14344262122') === '(434) 426-2122');
console.log(formatNumber('426212') === '0000000000');
console.log(formatNumber('43442621222') === '0000000000');
