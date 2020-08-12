function isBlockWord(str) {
  let blocks = ['BO', 'GT', 'VI', 'XK', 'RE',
  'LY', 'DQ', 'FS', 'ZM', 'CP', 'JW', 'NA', 'HU'];

  for (let charIdx = 0; charIdx < str.length; charIdx++) {
    let char = str[charIdx].toUpperCase();
    blockIdx = findBlockIdx(char);
    if (blockIdx >= 0) {
      delete blocks[blockIdx];
    } else {
      return false;
    }
  }

  return true;

  function findBlockIdx(char) {
    for (let idx = 0; idx < blocks.length; idx++) {
      let block = blocks[idx];
      if (!block) {
        continue;
      }
    
      if (block.includes(char)) {
        return idx;
      }
    }
    
    return -1;
  }
}

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
