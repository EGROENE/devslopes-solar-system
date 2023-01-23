import { describe, expect, it } from "vitest";
import { getOrbitalPeriodsSum } from "../exercises/e14";
import { data } from "../data/data";

describe("getOrbitalPeriodsSum", () => {
  it("Should exist", () => {
    expect(getOrbitalPeriodsSum).toBeInstanceOf(Function);
  });
  it("Should give 16898163.1762", () => {
    expect(getOrbitalPeriodsSum(data)).toEqual(16898163.1762);
  });
});
