// Example of a function being hoisted above a variable declaration.

bar();              // logs undefined
var foo = 'hello';

function bar() {
  console.log(foo);
}
