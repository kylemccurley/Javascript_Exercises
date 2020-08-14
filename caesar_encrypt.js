function caesarEncrypt(plaintext, key) {
  const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
  'w', 'x', 'y', 'z'];
  let shiftedPlainText = '';
  for (char of plaintext) {
    if ((/[a-z]/i).test(char)) {
      shiftedPlainText += shiftLetter(char);
    } else {
      shiftedPlainText += char;
    }
  }

  return shiftedPlainText;

  function shiftLetter(char) {
    let shiftedIndex = ((ALPHABET.indexOf(char.toLowerCase()) + key) % 26);
    let shiftedElement = (ALPHABET[shiftedIndex]);
    if (char === char.toUpperCase()) {
      return shiftedElement.toUpperCase();
    } else {
      return shiftedElement;
    }
  }
}

// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
