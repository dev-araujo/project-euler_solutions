/* 
Problem 4: Largest palindrome product
A palindromic number reads the same forwards and backwards.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

function largestPalindromeProduct(n) {
  const upperLimit = Math.pow(10, n) - 1;
  const lowerLimit = Math.pow(10, n - 1);

  let maxPalindrome = 0;

  for (let i = upperLimit; i >= lowerLimit; i--) {
    for (let j = i; j >= lowerLimit; j--) {
      let product = i * j;

      if (product <= maxPalindrome) {
        break;
      }

      let strProduct = String(product);
      let reversedStr = strProduct.split("").reverse().join("");

      if (strProduct === reversedStr) {
        maxPalindrome = product;
      }
    }
  }

  return maxPalindrome;
}

console.log(largestPalindromeProduct(2)); // should return 9009
console.log(largestPalindromeProduct(3)); // should return 906609
