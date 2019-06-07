// We can pass arbitrary data to functions using parameters (also called function arguments) .
// In the example below, the function has two parameters: from and text.
function showMessage(from, text) { // arguments: from, text
  console.log(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello!
showMessage('Ann', "What's up?"); // Ann: What's up?
// When the function is called the given values are copied to local variables `from` and `text`

function showMessageTwo(from, text) {
  from = '*' + from + '*'; // make "from" look nicer
  console.log(from + ': ' + text);
}

let from = "Ann";
showMessageTwo(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
console.log(from); // Ann

// If a parameter is not provided, then its value becomes undefined.
// For instance, the aforementioned function showMessageTwo(from, text) can be called with a single argument:
// That’s not an error. Such a call would output "Ann: undefined". There’s no text, so it’s assumed that text === undefined.
showMessageTwo("Ann");

// If we want to use a “default” text in this case, then we can specify it
// Now if the text parameter is not passed, it will get the value "no text given"
// Here "no text given" is a string, but it can be a more complex expression
// This expression will only be evaluated and assigned if the parameter is missing. So, this is also possible:
function showMessageThree(from, text = "no text given") {
  console.log( from + ": " + text );
}

showMessageThree("Ann"); // Ann: no text given

// In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter.
// In the example below, anotherFunction() is called every time showMessageFour() is called without the text parameter.
// This is in contrast to some other languages like Python, where default parameters are evaluated only once during the initial interpretation.

function showMessageFour(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}

function anotherFunction() {
  return "Jeff";
}

// Old editions of JavaScript did not support default parameters.
// There are alternative ways to support them, that you can find mostly in old scripts.

function showMessageFive(from, text) {
  if (text === undefined) {
    text = 'no text given';
  }

  console.log( from + ": " + text );
}

// …Or the || operator:

function showMessageSix(from, text) {
  // if text is falsy then text gets the "default" value
  text = text || 'no text given';

  console.log( from + ": " + text );
}
