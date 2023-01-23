import { describe, expect, it } from "vitest";
import { find } from "./exercises/e16";

describe("find", () => {
  it("should exist", () => {
    expect(find).toBeInstanceOf(Function);
  });

  it("should return the first thing that returns true from a callback", () => {
    expect(
      find(
        [
          { v: false, id: 1 },
          { v: true, id: 2 },
          { v: true, id: 3 },
        ],
        (el) => el.v
      )
    ).toEqual({ v: true, id: 2 });
  });
  it("should return undefined if not found", () => {
    expect(
      find(
        [
          { v: false, id: 1 },
          { v: false, id: 2 },
          { v: false, id: 3 },
        ],
        (el) => el.v
      )
    ).toEqual(undefined);
  });
});
