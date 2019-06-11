// Write the code, one line for each action:

//   Create an empty object user.
let user = {};
//   Add the property name with the value John.
user.name = "John";
//   Add the property surname with the value Smith.
user.surname = "Smith";
//   Change the value of the name to Pete.
user.name = "Pete";
//   Remove the property name from the object.
delete user.name;
// Dump all info about the user to console
console.log(user);

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like this:
let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false

function isEmpty(object) {
  let i = 0;
  for (let key in object) {
    i++;
  }
  return i === 0;
}

//   Constant objects?
// Is it possible to change an object declared with const? What do you think?
// Yes, because you can change the properties of the object
const newUser = {
  name: "John"
};

newUser.name = "Pete";

// Sum object properties
// We have an object storing salaries of our team:
// Write the code to sum all salaries and store in the variable sum. Should be 390 for the first example.
// If salaries is empty, then the result must be 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let emptySalaries = {};

sumOf(salaries);
sumOf(emptySalaries);

console.log(salaries);
console.log(emptySalaries);

function sumOf(object) {
  let sum = 0;
  for (let key in object) {
    sum += object[key];
  }
  object.sum = sum;
}

// Multiply numeric properties by 2
// Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
//
// For instance:
//
// // before the call
//   let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
//
// multiplyNumeric(menu);
//
// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(object) {
  for (let key in object) {
    if(typeof( object[key]) == "number") {
      object[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);
