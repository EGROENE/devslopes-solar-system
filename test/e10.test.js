import { describe, expect, it } from "vitest";
import { getAsteroidDataByName } from "../exercises/e10";
import { data } from "../data/data";

describe("getAsteroidDataByName", () => {
  it("Should exist", () => {
    expect(getAsteroidDataByName).toBeInstanceOf(Function);
  });
  it("Should be the object of Asteroid Data", () => {
    expect(getAsteroidDataByName(data,'624 Hektor')).toEqual(data.asteroids[10]);
  });
});
