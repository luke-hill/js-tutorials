// Regulation Switch

let a = 2 + 2;
switch (a) { // Exactly!
  case 3:
    console.log( 'Too small' );
    break;
  case 4:
    console.log( 'Exactly!' );
    break;
  case 5:
    console.log( 'Too large' );
    break;
  default:
    console.log( "I don't know such values" );
}

// Switch without a Break (Execution continues after the first pass without any additional checks
let b = 2 + 2;
switch (b) {
  case 3:
    console.log( 'Too small' );
  case 4:
    console.log( 'Exactly!' );
  case 5:
    console.log( 'Too big' );
  default:
    console.log( "I don't know such values" );
}

// In the example above we’ll see sequential execution of three messages:
//'Exactly!'
//'Too big'
//"I don't know such values"

// Switch with complex case statements
let c = "1";
let d = 0;

switch (+c) {
  case d + 1:
    console.log("this runs, because +c is 1, exactly equalling d + 1");
    break;
  default:
    console.log("this doesn't run");
}

// Switch with grouped case statements
let x = 2 + 2;

switch (x) {
  case 4:
    console.log('Right!');
    break;

  case 3:                    // (*) grouped two cases
  case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log('The result is strange. Really.');
}

// Type matters - the equality check is always strict. The values must be of the same type to match.

let arg = "3";
switch (arg) {
  case '0':
  case '1':
    console.log('One or zero');
    break;

  case '2':
    console.log('Two');
    break;

  case 3:
    console.log('Never executes!');
    break;
  default:
    console.log('An unknown value');
}
// Entering 0 / 1 - The first log statement runs
// Entering 2 - The second log statement runs
// But for 3 - The default runs, because 3 !== "3"
