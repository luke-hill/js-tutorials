const { triangle, TriangleError } = require('../src/triangle.js');

describe('triangle', () => {
  it('a triangle cannot have any sides of length 0', () => {
    expect( () => { triangle(0, 0, 0) } ).toThrow(TriangleError);
    expect( () => { triangle(2, 0, 0) } ).toThrow(TriangleError);
    expect( () => { triangle(2, 3, 0) } ).toThrow(TriangleError);
  });

  it('a triangle cannot have any sides of negative length', () => {
    expect( () => { triangle(3, 4, -1) } ).toThrow(TriangleError);
    expect( () => { triangle(2, -2, -2) } ).toThrow(TriangleError);
    expect( () => { triangle(-2, -3, -4) } ).toThrow(TriangleError);
  });

  it('a triangle cannot have one side greater or equal length to the sum of the other 2', () => {
    expect( () => { triangle(1, 1, 3) } ).toThrow(TriangleError);
    expect( () => { triangle(2, 4, 2) } ).toThrow(TriangleError);
  });
});
