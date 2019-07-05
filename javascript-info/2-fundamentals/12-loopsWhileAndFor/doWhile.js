// The condition check can be moved below the loop body using the do..while syntax:
// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
