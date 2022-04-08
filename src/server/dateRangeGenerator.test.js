const dateRangeGenerator = require("./dateRangeGenerator");

describe("getting a date range", () => {
  let dateNowSpy;

  const fixedDate = Math.floor(Math.random() * 16) + 6;
  beforeAll(() => {
    const date = +new Date(
      `${new Date().getFullYear()}-${new Date().getMonth()}-${fixedDate}`
    );
    dateNowSpy = jest.spyOn(Date, "now").mockImplementation(() => date);
  });

  test("should test for date", () => {
    const { start, end } = dateRangeGenerator();
    expect(new Date(end).getDate()).toBe(fixedDate);
    expect(new Date(start).getDate()).toBe(fixedDate - 6);
  });
  afterAll(() => {
    dateNowSpy.mockRestore();
  });
});
