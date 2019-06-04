console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  console.log( 'The time is 12:30' );
}

if (1 && 0) { // evaluated as true && false
  console.log( "won't work, because the result is falsey" );
}

// if the first operand is truthy,
// AND returns the second operand:
console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5

// if the first operand is falsey,
// AND returns it. The second operand is ignored
console.log( null && 5 ); // null
console.log( 0 && "no matter what" ); // 0

let x = 1;

(x > 0) && console.log( 'Greater than zero!' ); // kind of like an if
