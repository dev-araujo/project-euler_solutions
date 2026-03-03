
/* 
Problem 3: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the given number?
*/


function largestPrimeFactor(number) {
  let factor = 2;
  const minimal = 1;

  while (minimal < number) {
    if (number % factor === 0) {
      number = number / factor;
    } else {
      factor++;
    }
  }
  return factor;
}

console.log(largestPrimeFactor(2)); // should returns 2
console.log(largestPrimeFactor(8)); // should returns 2
console.log(largestPrimeFactor(13195)); // should returns 29
console.log(largestPrimeFactor(600851475143)); // should returns 6857
