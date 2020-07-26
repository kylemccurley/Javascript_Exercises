function endsOf(beginningArr, endingArr) {
  let firstElement = beginningArr[0];
  let secondElement = endingArr[endingArr.length - 1];

  return [firstElement, secondElement];
}

endsOf([4, 8, 15], [16, 23, 42]);  // returns [4, 42]
