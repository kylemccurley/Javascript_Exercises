function repeater(str) {
  let outcome = '';
  for (let i = 0; i < str.length; i++) {
    outcome += str[i];
    outcome += str[i];
  }

  return outcome;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
