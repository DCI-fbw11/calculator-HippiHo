const Calc = require("./index");

describe("Calculator tests", () => {
  test("should be able to add 1 + 1", () => {
    expect(new Calc(1).add(1)).toEqual({ num: 2 });
  });

  test("should be able to add multiple numbers", () => {
    expect(new Calc(1).add(1).add(1)).toEqual({ num: 3 });
  });

  test("should be able to subtract 3 - 1", () => {
    expect(new Calc(3).subtract(1)).toEqual({ num: 2 });
  });

  test("should be able to subtract multiple numbers", () => {
    expect(new Calc(3).subtract(1).subtract(1)).toEqual({ num: 1 });
  });

  test("should be able to multiply 3 * 1", () => {
    expect(new Calc(3).multiply(1)).toEqual({ num: 3 });
  });

  test("should be able to multiply multiple numbers", () => {
    expect(new Calc(3).multiply(1).multiply(2)).toEqual({ num: 6 });
  });

  test("should be able to divide 4 / 2", () => {
    expect(new Calc(4).divide(2)).toEqual({ num: 2 });
  });

  test("should be able to divide multiple numbers", () => {
    expect(new Calc(4).divide(2).divide(2)).toEqual({ num: 1 });
  });

  test("Don't accept strings", () => {
    expect(() => new Calc(100).add("onehundret")).toThrow("No strings allowed");
  });

  test("Don't accept object", () => {
    expect(() => new Calc(100).add({ num: "onehundret" })).toThrow(
      "No object allowed"
    );
  });

  test("Don't accept boolean", () => {
    expect(() => new Calc(100).add(false)).toThrow("No boolean allowed");
  });

  test("Don't accept undefined", () => {
    expect(() => new Calc(100).add(undefined)).toThrow("No undefined allowed");
  });

  test("Don't accept array", () => {
    expect(() => new Calc(100).add([100, 100])).toThrow("No array allowed");
  });

  test("Whole calculation", () => {
    expect(
      new Calc(1)
        .add(3)
        .subtract(3)
        .multiply(2)
        .divide(3)
        .result()
    ).toEqual(2 / 3);
  });
});
