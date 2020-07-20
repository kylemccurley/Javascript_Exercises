/* Replace WhiteSpace 
  Pseudo-Code:
    - Initialize a local variable: chars
      - Set to an array of the string characters
    - Iterate and map each character in the chars array:
      - If the element contains white space:
        - Return '%20' to the block
      - Otherwise:
        - Return the original character to the block.
    - Implicit return of the new values.
*/

function whitespace_replace(str) {
  var chars = str.split('');
  var outcome = ''
  chars.map(function (x) {
    if(x == ' ') {
      outcome += '%20';
    } else {
      outcome += x;
    }
  });

  return outcome;
}
console.log(whitespace_replace('hello'));
