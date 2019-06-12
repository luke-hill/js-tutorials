// The directive return can be in any place of the function.
// When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above).
// There can be many occurrences of return in a single function. For instance:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    console.log('Do you have permission from your parents?');
    return false;
  }
}

let age = 18;

if (checkAge(age)) {
  console.log('Access granted');
} else {
  console.log('Access denied');
}

// It is possible to use return without a value. That causes the function to exit immediately.
function showMovie(jeff) {
  if (!checkAge(jeff)) {
    return;
  }

  console.log("Showing you the movie");
}
// In the code above, if checkAge(age) returns false, then showMovie won’t proceed to the console.log
showMovie(); // Do you have permission from your parents?
showMovie(12); // Do you have permission from your parents?
showMovie(19); // Showing you the movie

// A function with an empty return or without it returns undefined
// If a function does not return a value, it is the same as if it returns undefined:
// An empty return is also the same as return undefined:

function doNothing() { /* empty */ }
console.log(doNothing() === undefined); // true
function alsoDoNothing() { return; }
console.log(alsoDoNothing() === undefined); // true
function returnNothing() { 3 + 5; } // this needs rewriting as return 3 + 5;
console.log(returnNothing() === undefined); // true

// Never add a newline between return and the value
// For a long expression in return, it might be tempting to put it on a separate line, like this:
// return
// (some + long + expression + or + whatever * f(a) + f(b))
// That doesn’t work, because JavaScript assumes a semicolon after return. That’ll work the same as:
//
// return;
// (some + long + expression + or + whatever * f(a) + f(b))
// So, it effectively becomes an empty return. We should put the value on the same line instead.
