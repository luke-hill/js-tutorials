const { triangle } = require('../src/triangle.js');

describe('triangle', () => {
  it('an equilateral triangle must have all equal sides', () => {
    expect( triangle(2, 2, 2) ).toEqual( Symbol.for("equilateral") );
    expect( triangle(10, 10, 10) ).toEqual( Symbol.for("equilateral") );
  });

  it('an isosceles triangle must have exactly 2 equal sides', () => {
    expect( triangle(3, 3, 5) ).toEqual( Symbol.for("isosceles") );
    expect( triangle(4, 3, 4) ).toEqual( Symbol.for("isosceles") );
    expect( triangle(4, 4, 3) ).toEqual( Symbol.for("isosceles") );
    expect( triangle(10, 10, 2) ).toEqual( Symbol.for("isosceles") );
  });

  it('a scalene triangle has no equal sides', () => {
    expect( triangle(3, 4, 5) ).toEqual( Symbol.for("scalene") );
    expect( triangle(10, 11, 12) ).toEqual( Symbol.for("scalene") );
    expect( triangle(5, 4, 2) ).toEqual( Symbol.for("scalene") );
  });
});
