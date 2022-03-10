const { sum } = require("../exerciseOne");

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
});
