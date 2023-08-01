import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...
  // First, put only planets that have moons into an array:
  // Then, filter out array of planets whose moons array includes moonName
  // Then, return the first item in the array of names from array containing all planet names of match
  return data.planets
    .filter((planet) => planet.moons)
    .filter((planet) => planet.moons.includes(moonName))
    .map((planet) => planet.name)[0];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
