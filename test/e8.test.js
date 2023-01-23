import { describe, expect, it } from "vitest";
import { findPlanetNameByMoon } from "../exercises/e8";
import { data } from "../data/data";

describe("findPlanetNameByMoon", () => {
  it("Should exist", () => {
    expect(findPlanetNameByMoon).toBeInstanceOf(Function);
  });
  it("Should be the planet Neptune for Triton moon", () => {
    expect(findPlanetNameByMoon(data,'Triton')).toEqual('Neptune');
  });
});
