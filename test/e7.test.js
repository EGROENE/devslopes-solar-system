import { describe, expect, it } from "vitest";
import { getPlanetsNamesWithMoons } from "../exercises/e7";
import { data } from "../data/data";

describe("getPlanetsWithMoons", () => {
  it("should exist", () => {
    expect(getPlanetsNamesWithMoons).toBeInstanceOf(Function);
  });
  it("There should be 6 items", () => {
    expect(getPlanetsNamesWithMoons(data).length).toEqual(6);
  });
  it("Should give me an array of the planet names", () => {
    expect(getPlanetsNamesWithMoons(data)).toEqual([ 'Uranus', 'Neptune', 'Jupiter', 'Mars', 'Saturne', 'Earth' ]);
  });
});
