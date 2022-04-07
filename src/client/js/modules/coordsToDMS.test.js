import coordsToDMS from "./coordsToDMS";

describe("should test for coords to deg min sec", () => {
  test("should return longitude", () => {
    expect(coordsToDMS(336.695983)).toBe("336° 41' 45'' E");
    expect(coordsToDMS(-209.05159)).toBe("209° 3' 5'' W");
  });

  test("should return latitude", () => {
    expect(coordsToDMS(38.29388, false)).toBe("38° 17' 37'' N");
    expect(coordsToDMS(-135.943476, false)).toBe("135° 56' 36'' S");
  });
});
