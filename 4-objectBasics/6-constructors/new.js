// The regular {...} syntax allows to create one object.
// But often we need to create many similar objects, like multiple users or menu items and so on.
// That can be done using constructor functions and the "new" operator.
// Constructor functions technically are regular functions. There are two conventions though:
//
//   They are named with capital letter first.
//   They should be executed only with "new" operator.
//   For instance:
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

console.log(user.name); // Jack
console.log(user.isAdmin); // false

// When a function is executed as new User(...), it does the following steps:
// A new empty object is created and assigned to this.
// The function body executes. Usually it modifies this, adds new properties to it.
// The value of this is returned. In other words, new AdminUser(...) does something like:

function AdminUser(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = true;

  // return this;  (implicitly)
}

// So the result of new AdminUser("Jack") is the same object as:

let admin = {
  name: "Jack",
  isAdmin: true
};

// Now if we want to create other users, we can call new User("Ann"), new AdminUser("Alice") and so on.
// That’s the main purpose of constructors – to implement reusable object creation code.
// Let’s note once again – technically, any function can be used as a constructor.
// That is: any function can be run with new, and it will execute the algorithm above.
// The “capital letter first” is a common agreement, to make it clear that a function is to be run with new.

// Using constructor functions to create objects gives a great deal of flexibility.
// The constructor function may have parameters that define how to construct the object, and what to put in it.
// For instance, new User(name) below creates an object with the given name and the method `sayHi`

function FreeUser(name) {
  this.name = name;

  this.sayHi = function() {
    console.log( "My name is: " + this.name );
  };
}

let john = new FreeUser("John");

john.sayHi(); // My name is: John
