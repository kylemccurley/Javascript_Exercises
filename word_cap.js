function wordCap(sentence) {
  // Split the sentence among spaces
  let words = sentence.split(' ');
  return words.map(word => word[0].toUpperCase() + word.slice(1, word.length)).join(' ');

}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
