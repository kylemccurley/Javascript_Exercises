function trim(string) {
  let copy = false;
  let leftTrim = '';

  // Trim Leftmost Side
  for(i = 0; i < string.length; i++) {
    let char = string[i];

    if (!copy && char == ' ') {
      continue;
    } else if (!copy && char != ' ') {
      leftTrim += char;
      copy = true;
    } else {
      leftTrim += char;
    }
  }

  // Trim RightMost Side (Final Outcome)
  copy = false;
  let rightTrim = '';

  for(i = (leftTrim.length - 1); i >= 0; i--) {
    let char = leftTrim[i];

    if (!copy && char == ' ') {
      continue;
    } else if (!copy && char != ' ') {
      rightTrim += char;
      copy = true;
    } else {
      rightTrim += char;
    }
  }

  // Reverse the outcome
  let outcome = '';
  for (i = (rightTrim.length - 1); i >= 0; i--) {
    outcome += rightTrim[i];
  }

  return outcome;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""
