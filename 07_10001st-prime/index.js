/*
Problem 7: 10001st prime
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?
*/

function nthPrime(n) {
  let primeCounter = 0;
  let num = 1;

  while (primeCounter < n) {
    num++;

    if (isPrime(num)) {
      primeCounter++;
    }
  }
  return num;
}

function isPrime(n) {
  const limit = Math.sqrt(n); // if a number is prime, it's a divisor lower or equal its square root
  if (n < 2) return false;

  for (let num = 2; num <= limit; num++) {
    if (n % num === 0) {
      return false;
    }
  }

  return true;
}

console.log(nthPrime(6)); // should return 13
console.log(nthPrime(10)); // should return 29
console.log(nthPrime(100)); // should return 541
console.log(nthPrime(1000)); // should return 7919
console.log(nthPrime(10001)); // should return 104743
