function substr(string, start, length) {
  let outcome = '';

  for(let i = 0; i < length; i++) {
    if (start < 0) {
      start += string.length
      outcome += string.charAt(i + start);
    } else if (start >= 0) {
      outcome += string.charAt(i + start);
    }
  }

  console.log(outcome);
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""
