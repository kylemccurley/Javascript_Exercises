function repeatedCharacters(str) {
  let lowerStr = str.toLowerCase();
  let charCount = {};
  for (let idx = 0; idx < str.length; idx++) {
    let char = lowerStr[idx];
    if (!(charCount[char])) {
      charCount[char] = 1;
    } else {
      charCount[char] += 1;
    }
  }

  for (letter in charCount) {
    if (charCount[letter] == 1) {
      delete charCount[letter];
    }
  }

  console.log(charCount);
  return charCount;
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }
