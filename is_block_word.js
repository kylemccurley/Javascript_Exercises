/*
  B:O   X:K   D:Q   C:P   N:A
  G:T   R:E   F:S   J:W   H:U
  V:I   L:Y   Z:M

  Data Structure Choice:
    Arrays: Array to store each block as a group of strings.
    Hashes: As a block dictionary lookup?
    Strings: Raw Input
    
    Block Dictionary Data Structure: Object Literal
    
    Rules/Requirements:
      - Will characters other than alphabetical characters be passed in?
        - Do I need to filter out words or throw an error if a digit is included in the string
    
    Algorithm: Given a string: str:
      - Initialize a block dictionary lookup hash:
        - B: O, X: K, D: Q, etc;
      - Iterate through each character of the string: |char|
        - Process the character by comparing it to the dictionary lookup hash:
          - Delete the property if either a key or the value includes the character
          - If a property is not found:
            - Return false
      - Return true
      
    Pseudo Code:
      SET blocks = {
        B:O, X:K, D: Q, etc
      }
    
      ITERATE through each character of the given string: |char|
        LOOKUP the character in the dictionary lookup hash;
          Is char in either a key or a value of the dictionary?
            Yes: 
              Delete the character from the dictionary
            No: Return false
      RETURN true
*/

function isBlockWord(str) {
  let availableBlocks = {
    B: 'O', X:'K', D:'Q', C:'P', N:'A',
    G:'T', R:'E', F:'S', J:'W', H:'U',
    V:'I', L:'Y', Z:'M',
  }
  
  str.split('').forEach((char) => {
    if (!dictionaryLookUp(char)) {
      return false;
    }
  });
  
  return true;
  
  function dictionaryLookUp(char) {
    let character = char.toUpperCase();
    for (let [k, v] of Object.entries(availableBlocks)) {
      if (character === k || character === v) {
        delete availableBlocks[k];
        return true;
      }
    }
    
    return false;
  }
}

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
