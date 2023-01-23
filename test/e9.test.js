import { describe, expect, it } from "vitest";
import { getEarthData } from "../exercises/e9";
import { data } from "../data/data";

describe("getEarthData", () => {
  it("Should exist", () => {
    expect(getEarthData).toBeInstanceOf(Function);
  });
  it("Should be the object of Earth planet data", () => {
    expect(getEarthData(data)).toEqual(data.planets[6]);
  });
});
