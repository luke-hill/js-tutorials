if ("0") {
  alert( 'Hello' );
} // Doesn't show

let officialName = prompt("What is the 'official' name of JavaScript?", '');

if (officialName != null && officialName == "ECMAScript") {
  alert('Right!');
} else {
  alert("Didn't know? ECMAScript!")
}

let inputNumber = prompt("What's your favourite number", '');

if (inputNumber > 0) {
  alert(1);
} else if (inputNumber < 0) {
  alert(-1);
} else {
  alert(0);
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
alert(result);


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

alert(message);
