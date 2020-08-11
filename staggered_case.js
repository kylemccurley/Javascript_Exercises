function staggeredCase(str) {
  let outcome = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 >= 1) {
      outcome += str[i].toLowerCase();
    } else {
      outcome += str[i].toUpperCase();
    }
  }

  return outcome;
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 NuMbErS"
