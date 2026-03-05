
/*
Problem 5: Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
MMC
*/



function smallestMult(n) {
  let multiple = n;
  let isValid = false;

  while (!isValid) {
    isValid = true;

    for (let i = n; i >= 2; i--) {
      if (multiple % i !== 0) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      return multiple;
    }

    multiple += n;
  }
}

console.log(smallestMult(5)); // should return 60
console.log(smallestMult(7)); // should return 420
console.log(smallestMult(10)); // should return 2520
console.log(smallestMult(13)); // should return 360360
console.log(smallestMult(20)); // should return 232792560
