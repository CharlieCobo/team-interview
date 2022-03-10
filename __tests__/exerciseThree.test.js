const extractValuesForKey = require("../exerciseThree");

const someObject = {
  uuid: 1,
  test: "Hello",
  innerOne: {
    someKey: "some text",
  },
  innerTwo: {
    uuid: 2,
    innerThree: {
      test: "World",
      someOtherKey: "some other key",
      innerFour: {
        uuid: 3,
      },
    },
  },
};

describe("Exercise Three - part #1", () => {
  let mockMapOne;
  beforeEach(() => {
    mockMapOne = new Map();
  });

  test('should find "uuid"', () => {
    mockMapOne.set("", 1);
    mockMapOne.set("innerTwo", 2);
    mockMapOne.set("innerTwo/innerThree/innerFour", 3);

    expect(extractValuesForKey(someObject, "uuid")).toStrictEqual(mockMapOne);
  });

  test('should find "someKey"', () => {
    mockMapOne.set("innerOne", "some text");

    expect(extractValuesForKey(someObject, "someKey")).toStrictEqual(
      mockMapOne
    );
  });

  test('should find "test"', () => {
    mockMapOne.set("", "Hello");
    mockMapOne.set("innerTwo/innerThree", "World");

    expect(extractValuesForKey(someObject, "test")).toStrictEqual(mockMapOne);
  });
});

describe("Exercise Three - part #2", () => {
  let mockMapTwo;
  beforeEach(() => {
    mockMapTwo = new Map();
  });

  test('should find "uuid"', () => {
    mockMapTwo.set("someObject", 1);
    mockMapTwo.set("someObject/innerTwo", 2);
    mockMapTwo.set("someObject/innerTwo/innerThree/innerFour", 3);

    expect(extractValuesForKey({ someObject }, "uuid")).toStrictEqual(
      mockMapTwo
    );
  });

  test('should find "test"', () => {
    mockMapTwo.set("someObject", "Hello");
    mockMapTwo.set("someObject/innerTwo/innerThree", "World");

    expect(extractValuesForKey({ someObject }, "test")).toStrictEqual(
      mockMapTwo
    );
  });
});
