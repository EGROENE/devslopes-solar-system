import { describe, it, expect } from "vitest";
import { getPlanetNames } from "../exercises/e1";
import { data } from "../data/data";

describe("getPlanetNames", () => {
  it("Should exist", () => {
    expect(getPlanetNames).toBeInstanceOf(Function);
  });
  it("There should be 8 elements", () => {
    expect(getPlanetNames(data).length).toEqual(8);
  });
  it("Should give me an array of the planet names", () => {
    expect(getPlanetNames(data)).toEqual([
      'Uranus',
      'Neptune',
      'Jupiter',
      'Mars',
      'Mercure',
      'Saturne',
      'Earth',
      'Vénus'
    ]);
  });
});
