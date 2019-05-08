let age;

// What's the result of OR?
console.log( null || 2 || undefined ); // 2

//What's the result of OR'ed logs? What will the code below output?
console.log( console.log(1) || 2 || console.log(3) ); // 1 is logged (But this is null return), so then 2

//What is the result of AND? What is this code going to show?
console.log( 1 && null && 2 ); // null

//What is the result of AND'ed alerts? What will this code show?
console.log( console.log(1) && console.log(2) ); // 1 is returned, but as the return is null, we short-circuit with null

// The result of OR AND OR What will the result be?
console.log( null || 2 && 3 || 4 );
// 2 && 3 returns 3
// Then we have null || 3 || 4
// This then returns 3

// Write an “if” condition to check that age is between 14 and 90 inclusively.
age = 17;
if(age >= 14 && age <= 90) {
  console.log("Age is between 14 and 90");
}

// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.

age = 11;
if(!(age >= 14 && age <= 90)) {
  console.log("Age is NOT between 14 and 90");
}

age = 1;
if(age < 14 || age > 90) {
  console.log("Age is definitely NOT between 14 and 90");
}

// Which of these logs are going to execute?

if (-1 || 0) console.log( 'first' ); // 'first'
if (-1 && 0) console.log( 'second' ); // This doesn't execute
if (null || -1 && 1) console.log( 'third' ); // 'third'

