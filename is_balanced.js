function isBalanced(str) {
  let score = 0;
  for (let char of str) {
    if (char === '(') {
      score++;
    } else if (char === ')') {
      score--;
    }
    
    if (score < 0) {
      console.log(false);
      return false;
    }
  }
  
  console.log(score === 0);
  return score === 0;
}

isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false
