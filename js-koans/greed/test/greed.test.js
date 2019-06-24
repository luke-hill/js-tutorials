describe('Greed Tests', () => {
  it('scores a single 2, 3, 4 or 6 as 0 points', () => {
    expect( score([2]) ).toEqual(0);
    expect( score([3]) ).toEqual(0);
    expect( score([4]) ).toEqual(0);
    expect( score([6]) ).toEqual(0);
  });

  it('scores a single 1, as 100', () => {
    expect( score([1]) ).toEqual(100);
  });

  it('scores a single 5, as 50', () => {
    expect( score([5]) ).toEqual(50);
  });

  it("scores a set of three numbers (Not 1's), as 100 * value", () => {
    expect( score([2, 2, 2]) ).toEqual(200);
    expect( score([3, 3, 3]) ).toEqual(300);
    expect( score([4, 4, 4]) ).toEqual(400);
    expect( score([5, 5, 5]) ).toEqual(500);
    expect( score([6, 6, 6]) ).toEqual(600);
  });

  it("scores a set of three 1's, as 1000", () => {
    expect( score([1, 1, 1]) ).toEqual(1000);
  });

  it("scores a set of four numbers (Not 1 or 5), as 100 * value", () => {
    expect( score([2, 2, 2, 2]) ).toEqual(200);
    expect( score([3, 3, 3, 3]) ).toEqual(300);
    expect( score([4, 4, 4, 4]) ).toEqual(400);
    expect( score([6, 6, 6, 6]) ).toEqual(600);
  });

  it("scores a set of four 1's, as 1100", () => {
    expect( score([1, 1, 1, 1]) ).toEqual(1100);
  });

  it("scores a set of four 5's, as 550", () => {
    expect( score([5, 5, 5, 5]) ).toEqual(550);
  });

  it("can score 0 with all 5 dice thrown", () => {
    expect( score([2, 2, 3, 4, 6]) ).toEqual(0);
    expect( score([2, 3, 3, 4, 4]) ).toEqual(0);
    expect( score([3, 3, 4, 4, 6]) ).toEqual(0);
    expect( score([2, 3, 4, 6, 6]) ).toEqual(0);
  });

  it("can score points without getting a bonus", () => {
    expect( score([1, 2, 3, 4, 5]) ).toEqual(150);
    expect( score([1, 2, 2, 5, 5]) ).toEqual(200);
    expect( score([1, 1, 2, 3, 5]) ).toEqual(250);
    expect( score([1, 1, 3, 5, 5]) ).toEqual(300);
  });

  it("can score points both with and without the bonus", () => {
    expect( score([2, 3, 3, 3, 5]) ).toEqual(350);
    expect( score([1, 1, 4, 4, 4]) ).toEqual(600);
    expect( score([1, 5, 5, 5, 5]) ).toEqual(650);
    expect( score([1, 1, 1, 5, 5]) ).toEqual(1100);
  });

  it("a perfect score gives you 1200 points", () => {
    expect( score([1, 1, 1, 1, 1]) ).toEqual(1200);
  });
});

