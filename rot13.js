function rot13(string) {
  const ROTATION_VALUE = 13;

 // Is the argument in the last 13 letters of the alphabet?
  let asciiAtAlphabetEnding = (asciiCode) => {
    // Bottom-most and upper-most ascii 
    // values for last 13 alphabetical letters.
    const UPPER_CASE_BEGIN = 'N'.charCodeAt(0); // 'A'.charCodeAt(0);
    const UPPER_CASE_END = 'Z'.charCodeAt(0); // 'M'.charCodeAt(0);
    const LOWER_CASE_BEGIN = 'n'.charCodeAt(0); // 'a'.charCodeAt(0);
    const LOWER_CASE_END = 'z'.charCodeAt(0); // 'm'.charCodeAt(0);
  
    return asciiWithinBounds(asciiCode, UPPER_CASE_BEGIN, UPPER_CASE_END) ||
           asciiWithinBounds(asciiCode, LOWER_CASE_BEGIN, LOWER_CASE_END);
  }

  // Is the argument in the first 13 letters of the alphabet?
  let asciiAtAlphabetBeginning = (asciiCode) => {
    // Bottom-most and upper-most ascii
    // values for first 13 alphabetical letters.
    const UPPER_CASE_BEGIN = 'A'.charCodeAt(0);
    const UPPER_CASE_END = 'M'.charCodeAt(0);
    const LOWER_CASE_BEGIN = 'a'.charCodeAt(0);
    const LOWER_CASE_END = 'm'.charCodeAt(0);
  
    return  asciiWithinBounds(asciiCode, UPPER_CASE_BEGIN, UPPER_CASE_END) || 
            asciiWithinBounds(asciiCode, LOWER_CASE_BEGIN, LOWER_CASE_END);
  }

  let asciiWithinBounds = (asciiCode, lowerBound, upperBound) => {
    return (asciiCode >= lowerBound && asciiCode <= upperBound);
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
