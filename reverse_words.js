function reverseWords(str) {
  let words = str.split(' ');
  let outcome = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length >= 5) {
      outcome.push(reverseWord(word));
    } else {
      outcome.push(word);
    }
  }

  return outcome.join(' ');

  function reverseWord(wrd) {
    let outcome = '';
    for (let i = wrd.length - 1; i >= 0; i--) {
      outcome += wrd[i];
    }

    return outcome;
  }
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
