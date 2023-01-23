import { describe, expect, it } from "vitest";
import { getAllAverageTemperatures } from "../exercises/e3";
import { data } from "../data/data";

describe("getAllAverageTemperatures", () => {
  it("Should exist", () => {
    expect(getAllAverageTemperatures).toBeInstanceOf(Function);
  });
  it("There should be 8 elements", () => {
    expect(getAllAverageTemperatures(data).length).toEqual(8);
  });
  it("Should give an array of average Temperature values", () => {
    expect(getAllAverageTemperatures(data)).toEqual([ 76, 55, 165, 210, 440, 134, 288, 737 ]);
  });
});
