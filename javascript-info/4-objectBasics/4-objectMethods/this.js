// We can have a user
let user = {
  name: "John",
  age: 30
};

// And, in the real world, a user can act: select something from the shopping cart, login, logout etc.
// Actions are represented in JavaScript by functions in properties.
// For the start, let’s teach the user to say hello:

user.sayHi = function() {
  console.log("Hello!");
};

user.sayHi(); // Hello!
// Here we’ve just used a Function Expression to create the function
// Then we assign it to the property user.sayHi of the object.
//   So, here we’ve got a method sayHi of the object user.
//   Of course, we could use a pre-declared function as a method, like this:
//
// first, declare it
function sayHi() {
  console.log("Hello!");
};

// then add as a method
user.sayHi = sayHi;
//
user.sayHi(); // Hello!

// “this” in methods
// It’s common that an object method needs to access the information stored in the object to do its job.
// For instance, the code inside user.sayHi() may need the name of the user.
// To access the object, a method can use the this keyword.
// The value of this is the object “before dot”, the one used to call the method.
// For instance:

let newUser = {
  name: "John",
  age: 30,

  sayHi() {
    console.log(`I'm ${this.name}!`);
  }
};

newUser.sayHi(); // John

// We can even call the function without an object at all:

function sayHiAgain() {
  console.log(this);
}

sayHiAgain(); // undefined
// In this case this is undefined in strict mode. If we try to access this.name, there will be an error.
// In non-strict mode the value of this in such case will be the global object
// (window in a browser, we’ll get to it later in the chapter Global object). This is a historical behavior that "use strict" fixes.