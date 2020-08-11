function rotateRightmostDigits(num, digits) {
  if (digits === 1) {
    return num;
  }

  let numStr = String(num);
  let toRotate = numStr.slice(numStr.length - digits, numStr.length);
  let baseDigits = numStr.slice(0, numStr.length - digits);
  
  function rotate(numStr) {
    return numStr.slice(1, numStr.length) + numStr[0];
  }
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
