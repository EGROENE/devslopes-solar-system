import { describe, expect, it } from "vitest";
import { getAsteroidsDiscoveredAfterYear } from "../exercises/e6";
import { data } from "../data/data";

describe("getAsteroidsDiscoveredAfterYear", () => {
  it("should exist", () => {
    expect(getAsteroidsDiscoveredAfterYear).toBeInstanceOf(Function);
  });
  it("There should be 6 items after 2000", () => {
    expect(getAsteroidsDiscoveredAfterYear(data,2000).length).toEqual(6);
  });
  it("Should give an array of Asteroids names", () => {
    expect(getAsteroidsDiscoveredAfterYear(data,2000))
      .toEqual([ '50000 Quaoar', '90377 Sedna', '90482 Orcus', '28978 Ixion', '(308933) 2006 SQ372', 'Arrokoth' ]);
  });
});
