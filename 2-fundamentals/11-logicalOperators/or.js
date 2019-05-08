console.log ( true || true );   // true
console.log ( false || true );  // true
console.log ( true || false );  // true
console.log ( false || false ); // false

let hour = 9;

if (hour < 10 || hour > 18) {
  console.log( 'The office is closed.' );
}

hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log( 'The office is closed.' ); // it is the weekend
}

console.log( 1 || 0 ); // 1 (1 is truthy)
console.log( true || 'no matter what' ); // (true is truthy)

console.log( null || 1 ); // 1 (1 is the first truthy value)
console.log( null || 0 || 1 ); // 1 (the first truthy value)
console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)
