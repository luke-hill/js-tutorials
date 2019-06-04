let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  console.log(i);
  i++;
}

let a = 3;
while (a) { // when i becomes 0, the condition becomes falsy, and the loop stops
  console.log(a);
  a--;
}

//If the loop body has a single statement, we can omit the curly braces {…}:
let x = 3;
while (x) console.log(x--);