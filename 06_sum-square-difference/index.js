/*

Problem 6: Sum square difference
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

*/

function sumSquareDifference(n) {
  let sumOfSquare = 0;
  let sumOfNaturals = 0;
  const exponent = 2;

  for (let i = 1; i <= n; i++) {
    sumOfSquare += Math.pow(i, exponent);
    sumOfNaturals += i;
  }

  let squareOfSum = Math.pow(sumOfNaturals, exponent);

  return squareOfSum - sumOfSquare;
}

console.log(sumSquareDifference(10)); // should return 2640
console.log(sumSquareDifference(20)); // should return 41230
console.log(sumSquareDifference(100)); // should return 25164150
