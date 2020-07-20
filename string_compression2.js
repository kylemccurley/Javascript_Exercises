/*
  String Compression:
    aaabbbcc => a3b3c2
    
    Pseudo:
      - Create a data structure to keep track of the count (hash).
        - Key: Letter
        - Value: Number/Instance Count
      - If the value doesn't exist in the data structure count:
        - Generate a new key value pair with a value of 1
      - Otherwise:
        - Iterate the value of the existing value up by 1
  
  Implicit Rules/Clarifying Questions:
    - Should this algorithm be case-sensitive?
    - Will the test cases include numerics or only alphabetical characters.
    - Is performance a major factor?
      - Will there be larger strings?
*/

function compression(str) {
  let count = count_chars(str);
  let compressedString = '';
  Object.keys(count).map (function(x) {
    compressedString += (x + count[x]);
  });
  if(compressedString.length < str.length) {
    return compressedString;
  } else {
    return str;
  }

  function count_chars(foo) {
    let count = {};
    for (let char of foo) {
      let char_log = count[char];
      // Check if the count has been logged. Need to assign
      // a numeric value otherwise.
      char_log == undefined ? count[char] = 1 : count[char]++;
    }

    return count;
  }
}

console.log(compression('kkYyllllleee'));
