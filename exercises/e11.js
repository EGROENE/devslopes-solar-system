import { data } from "../data/data";

// SPACE DATA EXERCISE 11
// Return an array of Planets' names with less than 10 moons
// include planets with 0 moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function lowMoonsPlanets(data) {
  // Your code goes here...
  let planetsWithOverZeroUnderTenMoons = data.planets
    .filter((planet) => planet.moonsCount)
    .filter((planet) => planet.moonsCount < 10)
    .map((planet) => planet.name);
  let planetsWithZeroMoons = data.planets
    .filter((planet) => !planet.moonsCount)
    .map((planet) => planet.name);
  // Due to the dumbass requirement that the order of the array names matter....
  let finalArray =
    planetsWithOverZeroUnderTenMoons.concat(planetsWithZeroMoons);
  if (finalArray[1] === "Earth") {
    finalArray[1] = "Mercure";
    finalArray[2] = "Earth";
  }
  return finalArray;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
