// Last loop value
// What is the last value alerted by this code? Why?
let i = 3;
while (i) { // 1 - Because we log the 1, then do -- (It's evaluated after)
  console.log( i-- );
}

// Which values does the while loop show?
// For every loop iteration, write down which value it outputs and then compare it with the solution.
// Both loops alert the same values, or not?

// The prefix form ++i:
let j = 0;
while (++j < 5) console.log(j); // 1, 2, 3, 4

//The postfix form i++
let k = 0;
while (k++ < 5) console.log(k); // 1, 2, 3, 4 (Forgot 5)

// Which values get shown by the "for" loop?
// For each loop write down which values it is going to show. Then compare with the answer.
// Both loops alert same values or not?

// The postfix form:
for (let i = 0; i < 5; i++) console.log(i); // 0, 1, 2, 3, 4

// The prefix form:
for (let i = 0; i < 5; ++i) console.log(i); // Think the same? - 0, 1, 2, 3, 4 - Yes

// Output even numbers in the loop
// Use the for loop to output even numbers from 2 to 10.

for (let i = 1; i < 6; i++) {
  console.log(2 * i);
}

// or

for (let i = 2; i < 11; i++) {
  if(i % 2 == 0) {
    console.log(i);
  }
}

// Replace the below function with a while

for (let i = 0; i < 3; i++) {
  console.log(`number ${i}!`);
}

while(i < 3) {
  console.log(`number ${i}!`);
  i++
}

// Repeat until the input is correct
// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

// Luke: I'm faking a random input here by just multiplying a random number by 200, this will take 1-5 times to pass
let input = 0;
while(input < 100) {
  // Fake the input here
  input = Math.floor(Math.random() * 200);
}

// Output prime numbers
// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
// Write the code which outputs prime numbers in the interval from 2 to n.
//
//   For n = 10 the result will be 2,3,5,7.
//
// P.S. The code should work for any n, not be hard-tuned for any fixed value.

// Which number we're testing up to
let maxPrimeTest = 100;

console.log(`Testing prime numbers from 2 -> ${maxPrimeTest}`);
for (let i = 2; i <= maxPrimeTest; i++) { // i represents an integer we are testing for primality
  if (isPrime(i)) {
    console.log(`${i} is a prime number`);
  }
}

function isPrime(n) {
  for (let j = 2; j < n ** 0.5; j++) { // j represents a potential factor we are testing (We only need to test up to root i)
    if (n % j == 0) {
      return false;
    }
  }
  return true;
}
