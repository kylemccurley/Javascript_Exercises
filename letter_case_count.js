function letterCaseCount(str) {
  let caseCount = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if ((/[a-z]/).test(char)) {
      caseCount.lowercase++;
    } else if ((/[A-Z]/).test(char)) {
      caseCount.uppercase++;
    } else {
      caseCount.neither++;
    }
  }

  return caseCount;
}
 
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
