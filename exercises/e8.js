import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...
  let planetsWithMoon = data.planets
  // Put only planets that have moons into an array:
  .filter(function(planet) {
    return planet.moons;
  })
  // Put planets whose moons include moonName, into an array:
  .map(function(planet) {
    if ( planet.moons.includes(moonName)) {
      return planet.name;
    }
  })
  .filter(function(planet) {
    return planet;
  });
  return planetsWithMoon[0];
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
