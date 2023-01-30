import { data } from "../data/data";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

export function allPlanetsMoonsCount(data) {
  // Your code goes here...
  // Returns all objects of planets that have moons:
  let planetsWithMoons = data.planets.filter(function (planet) {
    return planet.moonsCount;
  });
  // Put each planet's moonCount into array:
  let moonSums = planetsWithMoons.map(function (planet) {
    return planet.moonsCount;
  });
  // Add planets' moonCounts together:
  return moonSums.reduce((acc, moonSum) => {
    return acc + moonSum;
  });
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
