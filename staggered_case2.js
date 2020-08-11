function staggeredCase(str) {
  let counter = 0;
  let outcome = '';
  for (let idx = 0; idx < str.length; idx++) {
    let char = str[idx];
    if ((/[a-z]/i).test(char)) {
      if (counter % 2 === 0) {
        outcome += char.toUpperCase();
      } else {
        outcome += char.toLowerCase();
      }

      counter++;
    } else {
      outcome += char;
    }
  }

  return outcome;
}

staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"
