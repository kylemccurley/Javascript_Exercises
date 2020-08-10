function reverseSentence(str) {
  let outcome = [];
  let words = str.split(' ');
  for (let i = (words.length - 1); i >= 0; i--) {
    outcome.push(words[i]);
  }

  return outcome.join(' ');
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"
