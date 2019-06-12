// Function Expression vs Function Declaration
// Let’s formulate the key differences between Function Declarations and Expressions.
//
//   First, the syntax: how to differentiate between them in the code.
//   Function Declaration: a function, declared as a separate statement, in the main code flow.
//
// // Function Declaration
// function sum(a, b) {
//   return a + b;
// }
// Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created at the right side of the “assignment expression” =:
//
// // Function Expression
// let sum = function(a, b) {
//   return a + b;
// };
// The more subtle difference is when a function is created by the JavaScript engine.
//
//   A Function Expression is created when the execution reaches it and is usable from then on.
//   Once the execution flow passes to the right side of the assignment let sum = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on.
//   Function Declarations are different. A Function Declaration is usable in the whole script (or a code block, if it’s inside a block).
//
// In other words, when JavaScript prepares to run the script or a code block, it first looks for Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.
// And after all of the Function Declarations are processed, the execution goes on.
//
//   As a result, a function declared as a Function Declaration can be called earlier than it is defined.
//   For example, this works:
//
//   sayHi("John"); // Hello, John
//
// function sayHi(name) {
//   console.log( `Hello, ${name}` );
// }
// The Function Declaration sayHi is created when JavaScript is preparing to start the script and is visible everywhere in it.
//
// …If it was a Function Expression, then it wouldn’t work:
//
//   sayHi("John"); // error!
//
// let sayHi = function(name) {  // (*) no magic any more
//   console.log( `Hello, ${name}` );
// };
// Function Expressions are created when the execution reaches them. That would happen only in the line (*). Too late.
//
// When a Function Declaration is made within a code block, it is visible everywhere inside that block. But not outside of it.
//
//   Sometimes that’s handy to declare a local function only needed in that block alone. But that feature may also cause problems.
//   For instance, let’s imagine that we need to declare a function welcome() depending on the age variable that we get during runtime.
//   And then we plan to use it some time later. The code below doesn’t work:
//
//   let age = prompt("What is your age?", 18);
//
// // conditionally declare a function
// if (age < 18) {
//   function welcome() {
//     console.log("Hello!");
//   }
// } else {
//   function welcome() {
//     console.log("Greetings!");
//   }
// }
//
// welcome(); // Error: welcome is not defined
// That’s because a Function Declaration is only visible inside the code block in which it resides.
//
//   Here’s another example:
//
//   let age = 16; // take 16 as an example
//
// if (age < 18) {
//   welcome();               // \   (runs)
//   function welcome() {     //  |
//     console.log("Hello!"); //  |  Function Declaration is available
//   }                        //  |  everywhere in the block where it's declared
//   welcome();               // /   (runs)
// } else {
//   function welcome() {     //  for age = 16, this "welcome" is never created
//     console.log("Greetings!");
//   }
// }
//
// // Here we're out of curly braces,
// // so we can not see Function Declarations made inside of them.
//
// welcome(); // Error: welcome is not defined
// What can we do to make welcome visible outside of if?
//
//   The correct approach would be to use a Function Expression and assign welcome to the variable
//   that is declared outside of if and has the proper visibility.
//   Now it works as intended:
//
// let age = prompt("What is your age?", 18);
//
// let welcome;
//
// if (age < 18) {
//   welcome = function() {
//     console.log("Hello!");
//   };
// } else {
//   welcome = function() {
//     console.log("Greetings!");
//   };
// }
//
// welcome(); // ok now - Returns "Greetings!"
// Or we could simplify it even further using a question mark operator ?:
//
//   let age = prompt("What is your age?", 18);
//
// let welcome = (age < 18) ?
//   function() { console.log("Hello!"); } :
//   function() { console.log("Greetings!"); };
//
// welcome(); // ok now - Returns "Greetings!"
