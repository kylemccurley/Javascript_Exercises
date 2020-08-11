function wordToDigit(str) {
  const WORDS_TO_DIGITS = ['zero', 'one' ,'two', 'three', 'four', 'five', 'six', 'seven' ,'eight', 'nine'];
  let outcome = [];
  let words = str.split(' ');
  for (let wordIdx = 0; wordIdx < words.length; wordIdx++) {
    let word = words[wordIdx];
    let replaced = false;
    for (let convIdx = 0; convIdx < WORDS_TO_DIGITS.length; convIdx++) {
      if (word.includes(WORDS_TO_DIGITS[convIdx])) {
        outcome.push(word.replace(WORDS_TO_DIGITS[convIdx], convIdx));
        replaced = true;
      }
    }

    if (!replaced) {
      outcome.push(word);
    }
  }

  return outcome.join(' ');
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
