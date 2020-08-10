function doubleConsonants(str) {
  let outcome = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    outcome += char;
    if (((/\w/g).test(char)) && (/[^aeiou]/g.test(char))) {
      outcome += char ;
    }
  }

  return outcome;
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
