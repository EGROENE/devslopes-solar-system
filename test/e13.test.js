import {describe, expect, it} from "vitest";
import { getAveragePlanetsTemperature } from "../exercises/e13";
import { data } from "../data/data";

describe("averagePlanetsTemperature", () => {
  it("Should exist", () => {
    expect(getAveragePlanetsTemperature).toBeInstanceOf(Function);
  });
  it("Should be equal to 263.125", () => {
    expect(getAveragePlanetsTemperature(data)).toEqual(263.125);
  });
});
