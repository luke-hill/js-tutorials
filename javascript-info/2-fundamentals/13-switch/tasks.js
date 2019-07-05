// Rewrite the "switch" into an "if"
// Write the code using if..else which would correspond to the following switch:

let browser = "Edge";
// switch (browser) {
//   case 'Edge':
//     console.log("You've got the Edge!");
//     break;
//
//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     console.log('Okay we support these browsers too');
//     break;
//
//   default:
//     console.log('We hope that this page looks ok!');
// }

if(browser == 'Edge') {
  console.log("You've got the Edge!");
} else if(
  browser == 'Chrome' ||
  browser == 'Firefox' ||
  browser == 'Safari' ||
  browser == 'Opera'
) {
  console.log('Okay we support these browsers too');
} else {
  console.log('We hope that this page looks ok!');
}

//   Rewrite the code below using a single switch statement:
let a = 3;
// if (a == 0) {
//   console.log( 0 );
// }
// if (a == 1) {
//   console.log( 1 );
// }
//
// if (a == 2 || a == 3) {
//   console.log( '2,3' );
// }

switch (a) {
  case 0:
    console.log(0);
    break;

  case 1:
    console.log(1);
    break;

  case 2:
  case 3:
    console.log("2,3");
    break;
}
