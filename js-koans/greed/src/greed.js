
// A greed roll is scored as follows:
//
// A set of three ones is 1000 points - DONE
//
// A set of three numbers (other than ones) is worth 100 times the number. (e.g. three fives is 500 points). - DONE
//
// A one (that is not part of a set of three) is worth 100 points. - DONE
//
//   A five (that is not part of a set of three) is worth 50 points. - DONE
//
//   Everything else is worth 0 points. - DONE
//
//   Examples:
//
// ```js
// score([1,1,1,5,1]); // 1150 points - DONE
// score([2,3,4,6,2]); // 0 points - DONE
// score([3,4,5,3,3]); // 350 points - DONE
// score([1,5,1,2,4]); // 250 points - DONE
// ```

