function madlibs() {
  const noun = prompt('Enter a noun:');
  const verb = prompt('Enter a verb:');
  const adjective = prompt('Enter an adjective:');
  const adverb = prompt('Enter an adverb:');

  const sentence1 = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
  console.log(sentence1);
}

madlibs();
