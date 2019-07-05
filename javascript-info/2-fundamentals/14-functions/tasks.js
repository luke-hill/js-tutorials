// Is "else" required?
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Did parents allow you?');
//   }
// }
// Will the function work differently if else is removed?
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Did parents allow you?');
// }
// Is there any difference in the behavior of these two variants?
// Answer: They're identical

// Rewrite the following function using '?' or '||'
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return 'Do you have your parents permission to access this page?';
  }
}

function checkAgeTernary(age) {
  return (age > 18) ? true : 'Do you have your parents permission to access this page?';
}

function checkAgeOr(age) {
  return ((age > 18) || 'Do you have your parents permission to access this page?');
}

console.log(checkAge(15));
console.log(checkAge(20));
console.log(checkAgeTernary(15));
console.log(checkAgeTernary(20));
console.log(checkAgeOr(15));
console.log(checkAgeOr(20));

// Function min(a, b)
// Write a function min(a,b) which returns the least of two numbers a and b.
//
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a, b) {
  if (a < b) {
    console.log(a);
  } else {
    console.log(b);
  }
}

min(2, 5); // 2
min(3, -1); // -1
min(1, 1); // 1

// Function pow(x,n)
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
//
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
//
// P.S. In this task the function should support only natural values of n: integers up from 1.

function pow(a, b) {
  console.log(a ** b);
}

let ans;
function longWindedPow(a, b) {
  if(b == 0) {
    return console.log(1);
  }

  ans = a;
  for(let i = 2; i <= b; i++) {
    ans *= a;
  }
  console.log(ans);
}

pow(3, 2); // 3 * 3 = 9
pow(3, 3); // 3 * 3 * 3 = 27
pow(1, 100); // 1 * 1 * ...* 1 = 1
pow(5, 0); // 1 because anything to the power 0 is 1
longWindedPow(3, 2); // 3 * 3 = 9
longWindedPow(3, 3); // 3 * 3 * 3 = 27
longWindedPow(1, 100); // 1 * 1 * ...* 1 = 1
longWindedPow(5, 0); // 1 because anything to the power 0 is 1
