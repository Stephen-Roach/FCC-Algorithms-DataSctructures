// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.
// For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
  let newStr = '';

  for (let i = 0; i < num; i++) {
    if (Math.sign(num) >= 1) {
      newStr += str;
    } else {
      return '';
    }
  }
  return newStr;
}

repeatStringNumTimes('abc', 3);

// Test cases

// repeatStringNumTimes("*", 3) should return "***".
// Passed
// repeatStringNumTimes("abc", 3) should return "abcabcabc".
// Passed
// repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
// Passed
// repeatStringNumTimes("abc", 1) should return "abc".
// Passed
// repeatStringNumTimes("*", 8) should return "********".
// Passed
// repeatStringNumTimes("abc", -2) should return "".
// Passed
// The built-in repeat() method should not be used.
// Passed
// repeatStringNumTimes("abc", 0) should return "".
