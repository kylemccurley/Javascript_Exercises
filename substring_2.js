function substring(string, start, end) {
  if (start > end) {
    var begin = end;
    var finish = start;
  } else if (end === undefined) {
    var begin = Number.isInteger(start) ? start : 0;
    var finish = string.length;
  } else {
    var begin = start;
    var finish = end;
  }

  let index = begin;
  let iterator = '';

  if (begin < 0 || finish < end) {
    return '';
  }

  while (index < finish) {
    if (string[index] == undefined) {
      return iterator;
    } else {
      iterator += string[index];
    }
  
    index++;
  }

  return iterator;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"
