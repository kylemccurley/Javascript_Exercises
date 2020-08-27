/*
  Input: Diamond Height
  Output: Multi-Lined Console Logged Stars

  Rules/Requirements:
    - Calculate the number of spaces:
      Calculate the row number, either from iterating from 1 to 4, or 4 down to 1
      Multiply number of spaces by that number
    - Calculating and printing the number of stars:
      - Set starNumber to 1;
      - Add the star number up by 2 on every iteration
*/

function diamond(num) {
  if (num === 1) {
    console.log('*');
    return;
  }

  let middle = Math.ceil((num - 1)/ 2);
  let starCount = 1;
  for (let spaces = middle; spaces > 0; starCount += 2, spaces--) {
    console.log(repeat(' ', spaces) + repeat('*', starCount));
  }
  
  console.log(repeat('*', starCount));
  starCount -= 2;
  for (let spaces = 1; spaces <= middle; starCount -= 2, spaces++) {
    console.log(repeat(' ', spaces) + repeat('*', starCount));
  }

  function repeat(char, iterations) {
    let iterator = '';
    for (let i = iterations; i > 0; i--) {
      iterator += char;
    }

    return iterator;
  }
}


diamond(1);
/* logs
*
*/

diamond(3);
/* logs
 *
***
 *
*/

diamond(9);
/* logs
    *     Spaces: 4 | Stars: 1
   ***    Spaces: 3 | Stars: 3
  *****   Spaces: 2 | Stars: 5
 *******  Spaces: 1 | Stars: 7
********* Spaces: 0 | Stars: 9
 *******  Spaces: 4 | Stars: 7
  *****   Spaces: 3 | Stars: 5
   ***    Spaces: 2 | Stars: 3
    *     Spaces: 1 | Stars: 1
*/
