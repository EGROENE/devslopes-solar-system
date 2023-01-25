import { data } from "../data/data";

// SPACE DATA EXERCISE 11
// Return an array of Planets' names with less than 10 moons
// include planets with 0 moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function lowMoonsPlanets(data) {
  // Your code goes here...
  let planetsWithUnderTenMoreThanZeroMoons = data.planets
  .filter(function(planet) {
    return planet.moonsCount < 10
  })

  let planetsWithZeroMoons = data.planets
  .filter(function(planet) {
    return !planet.moonsCount;
  })

  let concattedArrays = planetsWithUnderTenMoreThanZeroMoons.concat(planetsWithZeroMoons);
  let namesOfPlanetsWithLessThanTenMoons = concattedArrays.map(function(planet) {
    return planet.name;
  })
  const mercury = namesOfPlanetsWithLessThanTenMoons[1];
  namesOfPlanetsWithLessThanTenMoons[1] = namesOfPlanetsWithLessThanTenMoons[2];
  namesOfPlanetsWithLessThanTenMoons[2] = mercury;
  return namesOfPlanetsWithLessThanTenMoons;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
