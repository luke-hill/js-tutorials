if ("0") {
  console.log( 'Hello' );
} // Doesn't show

// Fake - Prompt - "What is the 'official' name of JavaScript?"
let officialName = "ECMAScript";

if (officialName != null && officialName == "ECMAScript") {
  console.log('Right!');
} else {
  console.log("Didn't know? ECMAScript!")
}

let inputNumber = 6;

if (inputNumber > 0) {
  console.log("Positive Number");
} else if (inputNumber < 0) {
  console.log("Negative Number");
} else {
  console.log("Zero");
}

// Rewrite the below statement as a ternary
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
let a = 2;
let b = 1.2;
let result = (a + b < 4) ? "Below" : "Over";
console.log(result);

let message;
let login = "";

// Rewrite the below as a big ternary
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

message =
  (login == 'Employee') ? "Hello" :
  (login == 'Director') ? "Greetings" :
  (login == '') ? "No login" : "";

console.log(message);

let obj = { "": "no login", "Employee": "Luke", "Director": "Vlad" };
console.log(`Return: ${obj["test"] || "this won't get fired"}`);
console.log(obj["test"] === undefined);

a = null;
b = null;

console.log( a == b );
console.log( a === b );
