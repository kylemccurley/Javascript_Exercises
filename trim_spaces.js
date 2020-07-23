function trim(string) {
  let copy = false;
  let outcome = '';

  for(i = 0; i < string.length; i++) {
    let char = string[i];

    if (!copy && char == ' ') {
      continue;
    } else if (!copy && char != ' ') {
      outcome += char;
      copy = true;
    } else {
      outcome += char;
    }
  }

  return outcome;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""
