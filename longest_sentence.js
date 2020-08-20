const longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

function longestSentence(text) {
  const SENTENCE_REGEX = /\b\w[^.?!]+[.?!]+/g;
  const WORD_PARSING_REGEX = /[^.!?\s]+[.?!]*/g;
  let parsedSentences = text.match(SENTENCE_REGEX) || noSentence();
  let largestSentence= parsedSentences.reduce(findLongestSentence).match(WORD_PARSING_REGEX).join(' ');
  let wordsOfLargestSentence = largestSentence.match(WORD_PARSING_REGEX);
  var error;

  console.log(largestSentence + '\n');
  console.log(`The longest sentence has ${wordsOfLargestSentence.length} words. \n`);
  
  function findLongestSentence(largestSentence, currentSentence) {
    let parsedWordsLargest = largestSentence.match(WORD_PARSING_REGEX);
    let parsedWordsCurrent = currentSentence.match(WORD_PARSING_REGEX);
    return parsedWordsCurrent.length >= parsedWordsLargest.length ? currentSentence : largestSentence;
  }
  
  function noSentence() {
    
    error = new Error('No sentences were found after parsing the text.');
    error.name = 'ParsingError';
    throw error;
  }
}
  
longestSentence(longText);

/*
It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

The longest sentence has 86 words.
*/


// longestSentence('...hello.'); // Sentences without ending punctuation will throw an error.
longestSentence('.?  how ? r u?'); // Sentences with words of 1 letter
longestSentence("I''m not sure...what's the answer?'"); // Two of Same Length. Choose First. Quotes counted in word parsing
// longestSentence('yikes'); // Throws an error without ending punctuation.
longestSentence('hello   world. Goodbye      cruel word!'); // Parse out multiple spaces in output.


