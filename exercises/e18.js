import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons

  // Put all discovery years into array:
  let allDiscYears = data.asteroids.map(function(asteroid) {
    return asteroid.discoveryYear;
  })
  // GET MOST FREQUENTLY OCCURRING YEAR:
  let highestCountSoFar = 0;
  let mostCommonYear;
  // Get all elements one-by-one
  for (let i = 0; i < allDiscYears.length; i++) {
    let count = 0;
    // Find the frequency of the picked element and compares it with the maximum so far 
    for (let j = 0; j < allDiscYears.length; j++) {
      // If the picked elems are equal, add one to elem's tally. If not, nothing happens to tally:
      if (allDiscYears[i] === allDiscYears[j])
        count++;
    }
    // If the current count after comparing elems is higher than the current highestCountSoFar, then highestCountSoFar becomes current count & mostCommonYear becomes the current elem that was picked by init for loop:
    if (count > highestCountSoFar) {
        highestCountSoFar = count;
        mostCommonYear = allDiscYears[i];
    }
  }
  return mostCommonYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
