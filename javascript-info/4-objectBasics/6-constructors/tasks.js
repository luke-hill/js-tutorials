// Two functions – one object
// Is it possible to create functions A and B such as new A()==new B()?
let other = { luke: "TRUEEE" };

function A() { return other }
function B() { return other }

let a = new A;
let b = new B;

console.log( a == b ); // true

// Create a constructor function Calculator that creates objects with 3 methods:
// read() asks for two values using prompt and remembers them in object properties.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.
function Calculator() {
  this.read = function() {
    this.firstValue = Math.random();
    this.secondValue = Math.random();
    console.log(`First value ${this.firstValue}`);
    console.log(`Second value ${this.secondValue}`);
  };

  this.sum = function() {
    return this.firstValue + this.secondValue;
  };

  this.mul = function() {
    return this.firstValue * this.secondValue;
  };
}

let calculator = new Calculator();
calculator.read();
console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );

// Create a constructor function Accumulator(startingValue).
// Object that it creates should:
// Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
// The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with the initial value startingValue.

function Accumulator(startingValue) {
  this.value = startingValue;
  console.log(`Starting value ${startingValue}`);

  this.read = function() {
    this.newValue = Math.random();
    console.log(`Adding value ${this.newValue} to ${this.value}`);
    this.value += this.newValue;
  };
}

let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
console.log(accumulator.value); // shows the sum of these values
