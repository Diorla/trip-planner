import dateRange from "./dateRange";
describe("should return appropriate date", () => {
  const dateDiff = Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 31);
  const monthDiff = dateDiff * 12;
  const yearDiff = monthDiff * 5;

  const baseDateP1 = Date.now() + dateDiff;
  const baseDateP2 = Date.now() + dateDiff * 2;
  const baseMonthP1 = Date.now() + monthDiff;
  const baseMonthP2 = Date.now() + monthDiff * 2;
  const baseYearP1 = Date.now() + yearDiff;
  const baseYearP2 = Date.now() + yearDiff * 2;

  const baseDateM1 = Date.now() - dateDiff;
  const baseDateM2 = Date.now() - dateDiff * 2;
  const baseMonthM1 = Date.now() - monthDiff;
  const baseMonthM2 = Date.now() - monthDiff * 2;
  const baseYearM1 = Date.now() - yearDiff;
  const baseYearM2 = Date.now() - yearDiff * 2;

  test("should return before", () => {
    const dateBased = dateRange(baseDateP1, baseDateP2);
    const monthBased = dateRange(baseMonthP1, baseMonthP2);
    const yearBased = dateRange(baseYearP1, baseYearP2);
    expect(dateBased).toBe("before");
    expect(monthBased).toBe("before");
    expect(yearBased).toBe("before");
  });

  test("should return after", () => {
    const dateBased = dateRange(baseDateM2, baseDateM1);
    const monthBased = dateRange(baseMonthM2, baseMonthM1);
    const yearBased = dateRange(baseYearM2, baseYearM1);
    expect(dateBased).toBe("after");
    expect(monthBased).toBe("after");
    expect(yearBased).toBe("after");
  });

  test("should return within", () => {
    const dateBased = dateRange(baseDateM1, baseDateP1);
    const monthBased = dateRange(baseMonthM1, baseMonthP1);
    const yearBased = dateRange(baseYearM1, baseYearP1);

    expect(dateBased).toBe("within");
    expect(monthBased).toBe("within");
    expect(yearBased).toBe("within");
  });
});
