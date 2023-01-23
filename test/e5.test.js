import { describe, expect, it } from "vitest";
import { getPlanetsWithMassValue } from "../exercises/e5";
import { data } from "../data/data";

describe("getPlanetsWithMassValue", () => {
  it("Should exist", () => {
    expect(getPlanetsWithMassValue).toBeInstanceOf(Function);
  });
  it("The value of 4 should give me an array of planet names of length 5", () => {
    expect(getPlanetsWithMassValue(data,4).length).toEqual(5);
  });
  it("The number of 4 should give an array of Planets' names", () => {
    expect(getPlanetsWithMassValue(data,4)).toEqual([ 'Uranus', 'Mars', 'Saturne', 'Earth', 'Vénus' ]);
  });
});
