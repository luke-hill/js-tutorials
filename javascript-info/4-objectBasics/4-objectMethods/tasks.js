// What is the result of this code. P.S. There’s a pitfall :)

let user = {
  name: "John",
  go: function() { console.log(this.name) }
}; // This semi-colon is needed because we start a bracket on the next line and it concatenates it!

(user.go)();

// Explain the value of "this"
// In the code below we intend to call user.go() method 4 times in a row.
// But calls (1) and (2) works differently from (3) and (4). Why?
let obj, method;

obj = {
  go: function() { console.log(this); }
};

obj.go();               // (1) [object Object]
(obj.go)();             // (2) [object Object]
(method = obj.go)();    // (3) undefined / weird proto-y stuff -- This isn't working
(obj.go || obj.stop)(); // (4) undefined / weird proto-y stuff -- This isn't working

// Using "this" in object literal
// Here the function makeUser returns an object.
// What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let otherUser = makeUser();

console.log( otherUser.ref.name ); // What's the result?

// Create an object calculator with three methods:
//
// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
  read: function() {
    this.firstValue = Math.random();
    this.secondValue = Math.random();
    console.log(`First value ${this.firstValue}`);
    console.log(`Second value ${this.secondValue}`);
  },

  sum: function() {
    return this.firstValue + this.secondValue;
  },

  mul: function() {
    return this.firstValue * this.secondValue;
  }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; // added to make calls chainable
  },
  down() {
    this.step--;
    return this; // added to make calls chainable
  },
  showStep: function() { // shows the current step
    console.log( this.step );
    return this; // added to make calls chainable
  },
  reset() { // This is added so we can re-use the variable from step 0.
    this.step = 0;
    return this; // added to make calls chainable
  }
};
// Now, if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

// Modify the code of up, down and showStep to make the calls chainable, like this:
ladder.reset();
ladder.up().up().down().showStep(); // 1
