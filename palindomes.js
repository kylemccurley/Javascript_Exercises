function palindromes(str) {
  let palindromes = [];
  let substring = substrings(str);
  console.log(substring);

  function substrings(str) {
    let substrings = [];
    for (let startIdx = 0; startIdx < str.length; startIdx++) {
      let baseString = str.slice(startIdx, str.length);
      let substringArr = leadingSubstrings(baseString);
      for (let i = 0; i < substringArr.length; i++) {
        let str = substringArr[i];
        if (str === str.split('').reverse().join('') && str.length > 1) {
          substrings.push(str);
        }
      }
    }

    return substrings;

    function leadingSubstrings(str) {
      return str.split('').map((number, idx) =>
        str.slice(0, idx + 1));
    }
  }
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]
palindromes('hello-madam-did-madam-goodbye');
// returns
//[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//  "-madam-", "madam", "ada", "oo" ]
palindromes('knitting cassettes');
// returns
//[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
