import getDecimal from "./getDecimal";

describe("should return decimals", () => {
  test("should test for decimals", () => {
    const dec = Math.floor(Math.random() * 10000000);
    const main = Math.floor(Math.random() * 12345);

    const decLength = `${dec}`.length;
    const num = Number(`${main}.${dec}`);
    const negativeNum = Number(`-${main}.${dec}`);

    expect(getDecimal(1.5)).toBe(0.5);
    expect(getDecimal(-1.5)).toBe(0.5);

    expect(getDecimal(num).toFixed(decLength)).toBe(`0.${dec}`);
    expect(getDecimal(negativeNum).toFixed(decLength)).toBe(`0.${dec}`);
  });
});
