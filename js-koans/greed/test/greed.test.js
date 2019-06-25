const { greedScore } = require('../src/greed.js');

describe('greedScore', () => {
  it('an empty throw scores 0 points', () => {
    expect( greedScore([]) ).toEqual(0);
  });

  it('scores a single 2, 3, 4 or 6 as 0 points', () => {
    expect( greedScore([2]) ).toEqual(0);
    expect( greedScore([3]) ).toEqual(0);
    expect( greedScore([4]) ).toEqual(0);
    expect( greedScore([6]) ).toEqual(0);
  });

  it('scores a single 1, as 100', () => {
    expect( greedScore([1]) ).toEqual(100);
  });

  it('scores a single 5, as 50', () => {
    expect( greedScore([5]) ).toEqual(50);
  });

  it("scores a set of three numbers (Not 1's), as 100 * value", () => {
    expect( greedScore([2, 2, 2]) ).toEqual(200);
    expect( greedScore([3, 3, 3]) ).toEqual(300);
    expect( greedScore([4, 4, 4]) ).toEqual(400);
    expect( greedScore([5, 5, 5]) ).toEqual(500);
    expect( greedScore([6, 6, 6]) ).toEqual(600);
  });

  it("scores a set of three 1's, as 1000", () => {
    expect( greedScore([1, 1, 1]) ).toEqual(1000);
  });

  it("scores a set of four numbers (Not 1 or 5), as 100 * value", () => {
    expect( greedScore([2, 2, 2, 2]) ).toEqual(200);
    expect( greedScore([3, 3, 3, 3]) ).toEqual(300);
    expect( greedScore([4, 4, 4, 4]) ).toEqual(400);
    expect( greedScore([6, 6, 6, 6]) ).toEqual(600);
  });

  it("scores a set of four 1's, as 1100", () => {
    expect( greedScore([1, 1, 1, 1]) ).toEqual(1100);
  });

  it("scores a set of four 5's, as 550", () => {
    expect( greedScore([5, 5, 5, 5]) ).toEqual(550);
  });

  it("can score 0 with all 5 dice thrown", () => {
    expect( greedScore([2, 2, 3, 4, 6]) ).toEqual(0);
    expect( greedScore([2, 3, 3, 4, 4]) ).toEqual(0);
    expect( greedScore([3, 3, 4, 4, 6]) ).toEqual(0);
    expect( greedScore([2, 3, 4, 6, 6]) ).toEqual(0);
  });

  it("can score points without getting a bonus", () => {
    expect( greedScore([1, 2, 3, 4, 5]) ).toEqual(150);
    expect( greedScore([1, 2, 2, 5, 5]) ).toEqual(200);
    expect( greedScore([1, 1, 2, 3, 5]) ).toEqual(250);
    expect( greedScore([1, 1, 3, 5, 5]) ).toEqual(300);
  });

  it("can score points both with and without the bonus", () => {
    expect( greedScore([2, 3, 3, 3, 5]) ).toEqual(350);
    expect( greedScore([1, 1, 4, 4, 4]) ).toEqual(600);
    expect( greedScore([1, 5, 5, 5, 5]) ).toEqual(650);
    expect( greedScore([1, 1, 1, 5, 5]) ).toEqual(1100);
  });

  it("a perfect score is 1200 points", () => {
    expect( greedScore([1, 1, 1, 1, 1]) ).toEqual(1200);
  });

  it("a throw with too many dice scores 0 points", () => {
    expect( greedScore([1, 1, 1, 1, 1, 1]) ).toEqual(0);
  });
});
