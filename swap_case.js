function swapCase(str) {
  let swappedCase = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if ((/[a-z]/).test(char)) {
      swappedCase += (char.toUpperCase());
    } else {
      swappedCase += (char.toLowerCase());
    }
  }

  return swappedCase;
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
