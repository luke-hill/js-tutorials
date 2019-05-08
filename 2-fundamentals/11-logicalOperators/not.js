console.log( !true ); // false
console.log( !0 ); // true
//A double NOT !! is sometimes used for converting a value to boolean type:

console.log( !!"non-empty string" ); // true
console.log( !!null ); // false

// There’s a little more verbose way to do the same thing as above – a built-in Boolean function:
console.log( Boolean("non-empty string") ); // true
console.log( Boolean(null) ); // false

