// Inner Variables: A variable declared inside a function is only visible inside that function.

function showMessageOne() {
  let message = "Hello, I'm JavaScript!"; // local variable
  console.log(message);
}

showMessageOne(); // Hello, I'm JavaScript!
// console.log(message); // <-- Error! The variable is local to the function

// Outer variables: A function can access an outer variable as well, for example:

let userName = 'John';

function showMessageTwo() {
  let message = 'Hello, ' + userName;
  console.log(message);
}

showMessageTwo(); // Hello, John

// The function has full access to the outer variable. It can modify it as well.
let anotherUserName = 'Jeff';

function showMessageThree() {
  anotherUserName = 'Bob'; // This has actually changed the outer variable
  let message = 'Hello, ' + anotherUserName;
  console.log(message);
}

console.log(anotherUserName); // Jeff before the function call
showMessageThree();
console.log(anotherUserName); // Bob, the value was modified by the function

// The outer variable is only used if there’s no local one.
// If a same-named variable is declared inside the function then it shadows the outer one.
// For instance, in the code below the function uses the local `name`. The outer one is ignored:

let name = 'John';
function showMessage() {
  let name = 'Bob'; // declare a new copy of the variable `name` (local)
  let message = 'Hello, ' + name; // 'Hello Bob'
  console.log(message);
}

// the function will create and use its own name
showMessage();
console.log(name); // John, unchanged, the function did not access the outer variable
