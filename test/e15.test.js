import { describe, expect, it } from "vitest";
import { getPlanetsWithNoMoons } from "../exercises/e15";
import { data } from "../data/data";

describe("planetsWithNoMoons", () => {
  it("Should exist", () => {
    expect(getPlanetsWithNoMoons).toBeInstanceOf(Function);
  });
  it("There should be 2 items in the array", () => {
    expect(getPlanetsWithNoMoons(data).length).toEqual(2);
  });
  it("The names should be 'Mercure' and 'Venus'", () => {
    expect(getPlanetsWithNoMoons(data)).toEqual([ 'Mercure', 'Vénus' ]);
  });
});
