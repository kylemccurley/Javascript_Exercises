function cleanUp(words) {
  let outcome = '';
  for(let i = 0; i < words.length; i++) {
    let char = words[i];
    if (char.match(/[a-z]/i)) {
      outcome += char;
    } else {
      if (outcome[outcome.length - 1] != ' ') {
        outcome += ' ';
      }
    }
  }

  return outcome;
}


cleanUp("---what's my +*& line?");    // " what s my line "
