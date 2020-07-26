function twice(num) {
  if (isDouble(num)) {
    return console.log(num);
  } else {
    return console.log((num * 2));
  }
}

  function isDouble(num) {
    if (String(num).length % 2 == 1) return false;
    let numStr = String(num);
    let index1 = 0;
    let index2 = String(num).length / 2;
  
    for (let idx1 = 0, idx2 = (numStr.length / 2); idx2 < numStr.length; idx1++, idx2++) {
      let char1 = numStr[idx1];
      let char2 = numStr[idx2];
      if (char1 != char2) {
        return false;
      }
    }
    return true;
  }

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
