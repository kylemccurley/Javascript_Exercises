function toLowerCase(string) {
  let outcome = '';
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    ascii = char.charCodeAt(0);
    if (ascii > 32) {
      let lower_ascii = char.charCodeAt(0);
      outcome += String.fromCharCode(lower_ascii);
    } else {
      outcome += char;
    }
  }

  return outcome;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"

// let string = 'A';
// let asciiNumeric = string.charCodeAt(0);         // 65
// let asciiNumeric += 32;
// string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase
