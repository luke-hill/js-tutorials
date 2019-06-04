//The for loop is the most commonly used loop.
//Let’s learn the meaning of these parts by example.
// The loop below runs console.log(i) for i from 0 up to (but not including) 3:

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  console.log(i);
}

for (let x = 0; x < 3; x++) {
  console.log(x); // 0, 1, 2
}
// console.log(x); // error, no such variable

let j = 0;

for (j = 0; j < 3; j++) { // use an existing variable
  console.log(j); // 0, 1, 2
}

console.log(j); // 3, visible, because declared outside of the loop

// Part 1 can be skipped and assumed from parts 2/3
// Part 2 can be skipped, but then you basically have an infinite loop
// Part 3 can be skipped if you provide the step mechanism inside the {} i.e. console.log(i++);

// Normally, a loop exits when its condition becomes falsy.
// But we can force the exit at any time using the special break directive.
// For example, the loop below asks the user for a series of numbers, “breaking” when no number is entered:

let sum = 0;

while (true) {
  let value = Math.floor(Math.random() * 3);
  console.log(value);
  if (!value) break; // The break directive is activated if the value is falsy
  sum += value;
}

console.log('Sum: ' + sum);

// The continue directive is a “lighter version” of break. It doesn’t stop the whole loop.
// Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  console.log(i); // 1, then 3, 5, 7, 9
}


// Sometimes we need to break out from multiple nested loops at once.

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`X coord is ${i}`);
    console.log(`Y coord is ${j}`);
    // what if I want to exit from here to Done (below)?
  }
}

console.log("GAP");

// We need a way to stop the process if the user cancels the input.
// The ordinary break after input would only break the inner loop. That’s not sufficient–labels, come to the rescue!
// A label is an identifier with a colon before a loop:
// labelName: for (...) {
// ...
// }

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`X coord is ${i}`);
    console.log(`Y coord is ${j}`);

    // if an empty string or canceled, then break out of both loops
    if (j >= 2) break outer; // (*)
  }
}
