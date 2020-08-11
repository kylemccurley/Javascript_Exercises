function removeVowels(letters) {
  let transcribedWords = [];
  for (let idx = 0; idx < letters.length; idx++) {
    let word = letters[idx];
    transcribedWords.push(filter(word));
  }

  return transcribedWords;

  function filter(word) {
    let outcome = '';
    for (let i = 0; i < word.length; i++) {
      if ((/[^aeiou]/i).test(word[i])) {
        outcome += word[i];
      }
    }

    return outcome;
  }
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
