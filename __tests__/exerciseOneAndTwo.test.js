const { sum } = require("../exerciseOneAndTwo");

describe("Exercise One", () => {
  let newSum;
  beforeEach(() => {
    newSum = sum;
  });

  test("should return 0", () => {
    expect(newSum((result) => result)).toBe(0);
  });

  test("should return 1", () => {
    expect(newSum(1)((result) => result)).toBe(1);
  });

  test("should return 3", () => {
    expect(newSum(1)(2)((result) => result)).toBe(3);
  });

  test("should return 7", () => {
    expect(newSum(1)(2)(4)((result) => result)).toBe(7);
  });

  test("should return 6", () => {
    expect(newSum(1)(2)(4)(-1)((result) => result)).toBe(6);
  });
});

describe("Exercise Two", () => {
  let newSum;
  beforeEach(() => {
    newSum = sum;
  });

  test("should return 21", () =>
    expect(newSum(1)(2)(3)(4)(5)(6)((result) => result)).toBe(21));

  test("should return 29", () =>
    expect(newSum(1)(2)(3)(4)(5)(6)(8)((result) => result)).toBe(29));

  test("should return -1", () =>
    expect(newSum(1)(2)(3)(4)(5)(6)(8)(-30)((result) => result)).toBe(-1));
});
