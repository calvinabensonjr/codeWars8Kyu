/* https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript


Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


solution:
*/
return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)

