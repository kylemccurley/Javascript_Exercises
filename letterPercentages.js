function letterPercentages(str) {
  let outcome = { lowercase: 0, uppercase: 0, neither: 0 };
  let uppercaseCount = str.match(/[A-Z]/g).length;
  let lowercaseCount = str.match(/[a-z]/g).length;
  let neitherCount = str.length - (uppercaseCount + lowercaseCount);

  return {
           uppercase: ((uppercaseCount / str.length) * 100).toFixed(2),
           lowercase: ((lowercaseCount / str.length) * 100).toFixed(2),
           neither: ((neitherCount / str.length) * 100).toFixed(2), 
          }
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
