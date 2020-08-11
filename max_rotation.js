function maxRotation(num) {
  let numStr = String(num);
  for (let i = numStr.length; i > 0; i--) {
    numStr = rotateRightmostDigits(numStr, i);
  }

  return trim(numStr);

  function trim(num) {
    let numStr = String(num);
    let trimZeros = true;
    let outcome = '';
    for (let i = 0; i < numStr.length; i++) {
      let char = numStr[i];
      if (char === '0' && trimZeros) {
        continue;
      } else {
        outcome += char;
      }
    }

    return outcome;
  }

  function rotateRightmostDigits(num, digits) {
    if (digits === 1) {
      return num;
    }

    let numStr = String(num);
    let toRotate = numStr.slice(numStr.length - digits, numStr.length);
    let baseDigits = numStr.slice(0, numStr.length - digits);

    return (baseDigits + rotate(toRotate));
  
    function rotate(numStr) {
      return (numStr.slice(1, numStr.length) + numStr[0]);
    }
  }
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
//maxRotation(8703529146);      // 7321609845
