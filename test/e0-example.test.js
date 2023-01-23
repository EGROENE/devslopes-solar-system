import { describe, it, expect } from "vitest";
import { getFirstPlanetName } from "../exercises/e0-example";
import { data } from "../data/data";

describe("getPlanetNames", () => {
  it("Should exist", () => {
    expect(getFirstPlanetName).toBeInstanceOf(Function);
  });
  it("Should give me an array of the planet names", () => {
    expect(getFirstPlanetName(data)).toEqual('Uranus');
  });
});
