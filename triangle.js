/*
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

Input:  3x Numbers Representing the Sides of a triangle
Output: The triangle's classification

Rules/Requirements:
  - Valid Triangle:
    - Sum of the two shorts > Length of the hypotenuse
    - Every side must be greater than 0
  - Equilateral:
    - All three sides are of equal length
  - Isosceles:  
    - Two Sides Are of Equal Length
  - Scalene:
    - All Three sides are of different lengths

Data Structure:
  - Numbers: Lengths and the sum of the sides
  - Strings: Return of the classification
  - Array: Keep track of the different arguments

Algorithm:
  - Validate the triange:
    - Find the hypotenuse:
      - Find the max number within the given arguments
    - Finding the 2x shorter Sides:
      - All sides other than the hypotenuse
      - Filter out the value that is the hypotenuse
    - Add the 2 shorter sides: shortSum
    - shortSum < hypotenuse:
      - Return false
    - If any side <= 0:
      - Return false
    - Return true
  - If the sides create an invalid triangle:
    - Return false

  - If side1 === side2 && side2 === side3:
    - Return 'Equilateral'
  - If any value of the length values are 2: (separate function)
    - Return 'isosceles'
  - Otherwise:
    - Return 'Scalene'
*/

function triangle(...args) {
  if (!validTriangle(args)) {
    return 'invalid';
  }

  if (isEquilateral(args)) {
    return 'equilateral';
  } else if (isIsoceles(args)) {
    return 'isosceles';
  } else {
    return 'scalene'
  }

  function isEquilateral(args) {
    return args.every(sameSides);
  
    function sameSides(side, _, sides) {
      return side === sides[0];
    }
  }

  function validTriangle(args) {
    let sides = args.sort();
    let hypotenuse = sides.slice(2, 3);
    let shorter = sides.slice(0, 2);
    if (shorter.reduce(sum) <= hypotenuse) {
      return false;
    } else if (sides.some(zeroOrLess)) {
      return false;
    }

    return true;

    function sum(acc, value) {
      return acc + value;
    }
  
    function zeroOrLess(side) {
      return side <= 0; 
    }
  }

  function isIsoceles(args) {
    let sideCount = {};
    for (let side of args) {
      if (!sideCount[side]) {
        sideCount[side] = 1;
      } else {
        sideCount[side]++;
      }
    }

    return Object.values(sideCount).some(checkTwo);

    function checkTwo(value) {
      return value === 2;
    }
  }
}

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"
