function rot13(string) {
  const ROTATION_VALUE = 13;

 // Is the character argument in the last 13 letters of the alphabet?
  let alphabetEnding = (charAscii) => {
    // Bottom-most and upper-most ascii 
    // values for last 13 alphabetical letters.
    const UPPER_CASE_LOWER_BOUND_ASCII = 78;
    const UPPER_CASE_UPPER_BOUND_ASCII = 90;
  
    const LOWER_CASE_LOWER_BOUND_ASCII = 110;
    const LOWER_CASE_UPPER_BOUND_ASCII = 122;
  
    return ((charAscii >= UPPER_CASE_LOWER_BOUND_ASCII &&
            charAscii <= UPPER_CASE_UPPER_BOUND_ASCII) ||
           ( // LowerCase
            charAscii >= LOWER_CASE_LOWER_BOUND_ASCII &&
            charAscii <= LOWER_CASE_UPPER_BOUND_ASCII));
  }

  // Is the character argument in the first 13 letters of the alphabet?
  let alphabetBeginning = (charAscii) => {
    // Bottom-most and upper-most ascii
    // values for first 13 alphabetical letters.
    const UPPER_CASE_LOWER_BOUND_ASCII = 65;
    const UPPER_CASE_UPPER_BOUND_ASCII = 77;

    const LOWER_CASE_LOWER_BOUND_ASCII = 97;
    const LOWER_CASE_UPPER_BOUND_ASCII = 109;
  
    return ((charAscii >= UPPER_CASE_LOWER_BOUND_ASCII &&
             charAscii <= UPPER_CASE_UPPER_BOUND_ASCII) ||
             ( // Lowercase
              charAscii >= LOWER_CASE_LOWER_BOUND_ASCII &&
              charAscii <= LOWER_CASE_UPPER_BOUND_ASCII));
  }
  
  // Perform translation based on character's
  // position in the alphabet.
  // Add or subtract rotation value?
  let translateFrom = (ascii) => {
    if (alphabetBeginning(ascii)) {
      let translatedAscii = (ascii + ROTATION_VALUE);
      return String.fromCharCode(translatedAscii);
    } else if (alphabetEnding(ascii)) {
      let translatedAscii = (ascii - ROTATION_VALUE);
      return String.fromCharCode(translatedAscii);
    } else {
      return String.fromCharCode(ascii);
    }
  }

// Primary Algorithm
  let outcome = '';
  for (let i = 0; i < string.length; i++) {
    let ascii = string.charCodeAt(i);
    outcome += translateFrom(ascii)
  }

  return outcome;
}
