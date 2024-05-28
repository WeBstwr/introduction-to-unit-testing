const { fizzBuzz } = require("./FizzBuzz");

describe("fizzBuzz", () => {
  it("returns 'Fizz' if num is divisible by 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("returns 'Buzz' if num is divisible by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("returns 'FizzBuzz' if num is divisible by both 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("returns num if num is not divisible by 3 or 5", () => {
    expect(fizzBuzz(98)).toBe(98);
  });
});
