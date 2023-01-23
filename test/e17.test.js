import { beforeEach, describe, expect, it } from "vitest";
import { maxBy, minBy } from "../exercises/e17";

describe.only("minBy", () => {
  let people = [];
  beforeEach(() => {
    people = [
      { name: "jon", age: 29 },
      { name: "peter", age: 30 },
      { name: "andrey", age: 22 },
      { name: "rachel", age: 25 },
    ];
  });
  it("minBy should return the youngest person", () => {
    expect(minBy(people, (person) => person.age)).toEqual({
      name: "andrey",
      age: 22,
    });
  });

  it("if 2 minimums are the same, it should be the first one in the array", () => {
    people.push({ name: "joey", age: 22 });
    expect(minBy(people, (person) => person.age)).toEqual({
      name: "andrey",
      age: 22,
    });
  });

  it("should get the youngest other than just at the first or second position", () => {
    const people = [
      { name: "jon", age: 12 },
      { name: "tyson", age: 10 },
      { name: "rachel", age: 9 },
      { name: "peter", age: 14 },
    ];
    expect(minBy(people, (person) => person.age)).toEqual({
      name: "rachel",
      age: 9,
    });
  });

  it("should return undefined if no elements in array", () => {
    expect(minBy([], (person) => person.age)).toEqual(undefined);
  });
});

describe("maxBy", () => {
  let people = [];
  beforeEach(() => {
    people = [
      { name: "jon", age: 29 },
      { name: "peter", age: 30 },
      { name: "andrey", age: 22 },
      { name: "rachel", age: 25 },
    ];
  });
  it("maxBy should return the oldest person", () => {
    expect(maxBy(people, (person) => person.age)).toEqual({
      name: "peter",
      age: 30,
    });
  });

  it("maxBy should return the third person if the third person is the oldest", () => {
    people.unshift({ name: "first", age: 20 });
    expect(maxBy(people, (person) => person.age)).toEqual({
      name: "peter",
      age: 30,
    });
  });

  it("if 2 maxiumums are the same, it should be the first one in the array", () => {
    people.push({ name: "joey", age: 30 });
    expect(maxBy(people, (person) => person.age)).toEqual({
      name: "peter",
      age: 30,
    });
  });

  it("should return undefined if no elements in array", () => {
    expect(maxBy([], (person) => person.age)).toEqual(undefined);
  });
});
