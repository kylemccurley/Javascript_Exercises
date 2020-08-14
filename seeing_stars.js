function generateStars(n) {
  const MIDDLE_ELEMENT_POSITION = ((n-1) / 2);
  let topRows = generateTopRows();
  let center = generateCenter();
  let bottomRows = generateBottomRows();

  for (row of topRows) console.log(row);
  console.log(center);
  for (row of bottomRows) console.log(row);

  function generateCenter() {
    return repeat('*' , n);
  }

  function generateBottomRows() {
    let rows = [];
    for (let i = 0; i < MIDDLE_ELEMENT_POSITION; i++) {
      rows.push(generatePadding(i) + '*' + repeat(' ', i) + '*' + repeat(' ', i) + '*');
    }

    return rows;
  }

  function generateTopRows() {
    let rows = [];
    for (let i = MIDDLE_ELEMENT_POSITION - 1; i >= 0; i--) {
      rows.push(generatePadding(i) + '*' + repeat(' ', i) + '*' + repeat(' ', i) + '*');
    }

    return rows;
  }

  function generatePadding(row) {
    let rawSpaceCount = MIDDLE_ELEMENT_POSITION - 1;
    return repeat(' ', rawSpaceCount - row)
  }

  function repeat(char, iterations) {
    let repeatedCharacters = '';
    for (let i = 0; i < iterations; i++) {
      repeatedCharacters += char;
    }

    return repeatedCharacters;
  }
}

generateStars(7);
