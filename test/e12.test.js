import { describe, expect, it } from "vitest";
import { allPlanetsMoonsCount } from "../exercises/e12";
import { data } from "../data/data";

describe("allPlanetsMoonsCount", () => {
  it("Should exist", () => {
    expect(allPlanetsMoonsCount).toBeInstanceOf(Function);
  });
  it("Should return 206", () => {
    expect(allPlanetsMoonsCount(data)).toEqual(206);
  });
});
