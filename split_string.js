function splitString(string, delimiter) {
  if (delimiter == undefined) {
    console.log("ERROR: No delimiter");
    return
  }

  var iterator = '';
  for(let i = 0; i < string.length; i++) {
    var char = string[i];
    if(char == delimiter) {
      console.log(iterator);
      iterator = '';
    } else if (delimiter == '') {
      iterator = char;
      console.log(iterator);
      iterator = '';
    } else {
      iterator += char;
    }
  }
  if (!!iterator) {
    console.log(iterator);
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
