function wordCount(str) {
  let wordCount = {};
  let words = str.split(' ');

  for(wordIdx = 0; wordIdx < words.length; wordIdx++) {
    let word = words[wordIdx];
    if (!!wordCount[word]) {
      wordCount[word] += 1;
    } else {
      wordCount[word] = 1;
    }
  }

  return wordCount;
}

wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }
