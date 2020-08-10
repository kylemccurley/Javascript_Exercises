function substrings(str) {
  let substrings = [];
  for (let startIdx = 0; startIdx < str.length; startIdx++) {
    let baseString = str.slice(startIdx, str.length);
    substrings.push(leadingSubstrings(baseString));
  }

  return substrings;

  function leadingSubstrings(str) {
    return str.split('').map((number, idx) =>
      str.slice(0, idx + 1));
  }
}

substrings('abcde');
