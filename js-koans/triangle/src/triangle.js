function triangle(a, b, c) {
  if(invalidSideLength(a, b, c)) throw new TriangleError("Invalid Side Length.");
  if(impossibleTriangle(a, b, c)) throw new TriangleError("Triangle cannot be constructed.");
  if(allSame(a, b, c)) return Symbol.for("equilateral");
  if(allDifferent(a, b, c)) return Symbol.for("scalene");
  return Symbol.for("isosceles");
}

function invalidSideLength(a, b, c) {
  return a <= 0 || b <= 0 || c <= 0;
}

function impossibleTriangle(a, b, c) {
  // A triangle must adhere to the rule that the largest side cannot be greater
  // than or equal to the sum of the other 2 sides
  return a >= b + c || b >= a + c || c >= a + b;
}

function allSame(a, b, c) {
  return a == b && b == c;
}
function allDifferent(a, b, c) {
  return a != b && a != c && b != c;
}

class TriangleError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "TriangleError"; // (2)
  }
}

module.exports = {
  triangle,
  TriangleError
};
