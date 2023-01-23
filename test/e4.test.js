import { describe, expect, it } from "vitest";
import { getPlanetsWithLowGravity } from "../exercises/e4";
import { data } from "../data/data";

describe("getPlanetsWithLowGravity", () => {
  it("should exist", () => {
    expect(getPlanetsWithLowGravity).toBeInstanceOf(Function);
  });
  it("There should be 5 planets", () => {
    expect(getPlanetsWithLowGravity(data).length).toEqual(5);
  });
  it("should give me an array of all the planet names", () => {
    expect(getPlanetsWithLowGravity(data)).toEqual([ 'Uranus', 'Mars', 'Mercure', 'Earth', 'Vénus' ]);
  });
});
