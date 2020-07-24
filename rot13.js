function rot13(string) {
  const ROTATION_VALUE = 13;

 // Is the argument in the last 13 letters of the alphabet?
  let asciiAtAlphabetEnding = (asciiCode) => {
    const UPPER_CASE = ['N'.charCodeAt(0), 'Z'.charCodeAt(0)];
    const LOWER_CASE = ['n'.charCodeAt(0), 'z'.charCodeAt(0)];
  
    return asciiWithinBounds(asciiCode, LOWER_CASE, UPPER_CASE) ||
           asciiWithinBounds(asciiCode, LOWER_CASE, UPPER_CASE);
  }

  // Is the argument in the first 13 letters of the alphabet?
  let asciiAtAlphabetBeginning = (asciiCode) => {
    // Bottom-most and upper-most ascii
    // values for first 13 alphabetical letters.
    const UPPER_CASE = ['A'.charCodeAt(0), 'M'.charCodeAt(0)];
    const LOWER_CASE = ['a'.charCodeAt(0), 'm'.charCodeAt(0)];
  
    return  asciiWithinBounds(asciiCode, LOWER_CASE, UPPER_CASE);
  }

  let asciiWithinBounds = (asciiCode, lowerCase, upperCase) => {
    let lowerCaseLowerBound = lowerCase[0];
    let lowerCaseUpperBound = lowerCase[1];

    let upperCaseLowerBound = upperCase[0];
    let upperCaseUpperBound = upperCase[1];

    return (asciiCode >= lowerCaseLowerBound && asciiCode <= lowerCaseLowerBound) ||
           (asciiCode >= upperCaseLowerBound && asciiCode <= upperCaseUpperBound);
  }
  
  // Perform translation based on character's
  // position in the alphabet.
  // Add or subtract rotation value?
  let translateFrom = (asciiCode) => {
    if (asciiAtAlphabetBeginning(asciiCode)) {
      asciiCode += ROTATION_VALUE;
    } else if (asciiAtAlphabetEnding(asciiCode)) {
      asciiCode -= ROTATION_VALUE;
    }
 
    return String.fromCharCode(asciiCode);
  }

// Primary Algorithm
  let outcome = '';
  for (let i = 0; i < string.length; i++) {
    let asciiCode = string.charCodeAt(i);
    outcome += translateFrom(asciiCode);
  }

  return outcome;
}

rot13('hello world');
