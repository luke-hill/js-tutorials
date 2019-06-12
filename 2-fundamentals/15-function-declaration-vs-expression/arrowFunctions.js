// Arrow functions
// There’s one more very simple and concise syntax for creating functions, that’s often better than Function Expressions.
// It’s called “arrow functions”, because it looks like this:
//
// let func = (arg1, arg2, ...argN) => expression
// …This creates a function func that has arguments arg1..argN, evaluates the expression on the right side
// In other words, it’s roughly the same as:
//
// let func = function(arg1, arg2, ...argN) {
//   return expression;
// };
//
//   Let’s see an example:
//
//   let sum = (a, b) => a + b;
//
// /* The arrow function is a shorter form of:
//
// let sum = function(a, b) {
//   return a + b;
// };
// */
//
// console.log( sum(1, 2) ); // 3
// If we have only one argument, then parentheses can be omitted, making that even shorter:
//
// same as ...
// let double = function(n) { return n * 2 }
// let double = n => n * 2;
//
// console.log( double(3) ); // 6
// If there are no arguments, parentheses should be empty (but they should be present):
//
// let sayHi = () => console.log("Hello!");
//
// sayHi(); // ok now - Returns "Hello!"
// Arrow functions can be used in the same way as Function Expressions.
//
// For instance, here’s the rewritten example with welcome():
//
// let age = prompt("What is your age?", 18);
//
// let welcome = (age < 18) ?
//   () => console.log('Hello') :
//   () => console.log("Greetings!");
//
// welcome(); // ok now - Returns "Greetings!"
// Arrow functions may appear unfamiliar and not very readable at first, but that quickly changes as the eyes get used to the structure.
//
//   They are very convenient for simple one-line actions, when we’re just too lazy to write many words.
