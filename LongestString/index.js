// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
  let savedWord = [];
  let wordArray = str.split(' ');
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > savedWord.length) {
      savedWord = wordArray[i];
    }
  }
  return savedWord.length;
}

// Test cases

// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number. - Passed

// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.- Passed

// findLongestWordLength("May the force be with you") should return 5.- Passed

// findLongestWordLength("Google do a barrel roll") should return 6.- Passed

// findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.- Passed

// findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.- Passed
