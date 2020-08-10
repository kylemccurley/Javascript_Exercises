function reverseNumber(num) {
  let numStr = String(num);
  let outcome = '';
  for (let i = (numStr.length - 1); i >= 0; i--) {
    let digit = numStr[i];
    outcome += digit;
  }

  return trimZeros(outcome);

  function trimZeros(num) {
    let numStr = String(num);
    let outcome = '';
    let leading = true;
    for (let i = 0; i < numStr.length; i++) {
      let digit = numStr[i];
      if (digit === '0' && leading) {
        continue;
      } else {
        outcome += digit;
      }
    }

    return Number(outcome);
  }
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that zeros get dropped!
reverseNumber(1);        // 1
