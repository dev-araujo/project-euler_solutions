/*
Problem 1: Multiples of 3 or 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

*/

function multiplesOf3Or5(number) {
  let res = 0;
  let counter = 0;

  while (counter < number) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      res += counter;
    }

    counter++;
  }

  return res;
}

console.log(multiplesOf3Or5(10)); // should return 23
console.log(multiplesOf3Or5(49)); // should return 543
console.log(multiplesOf3Or5(1000)); // should return 233168
console.log(multiplesOf3Or5(8456)); // should return 16687353
console.log(multiplesOf3Or5(19564)); // should return 89301183
