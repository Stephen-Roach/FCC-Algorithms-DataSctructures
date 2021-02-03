// Basic Algorithm Scripting: Factorialize a Number
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive
// integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
  for (var i = 1; num > 0; num--) i *= num;
  return i;
}

factorialize(5);

//Test cases
// factorialize(5) should return a number. - passed

// factorialize(5) should return 120. - passed

// factorialize(10) should return 3628800. - passed

// factorialize(20) should return 2432902008176640000. - passed

// factorialize(0) should return 1. - passed
