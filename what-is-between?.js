/* https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript

What is between?


Instructions

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

Solutions:
*/

function between(a, b) {
  // loop? integers between a and b
  // variable for array?
  
//   for(let arrBetw = 1; arrBetw < arrBetw.length - 1; arrBetw++){
//     return arrBetw
  
  let arr = []
  for(let i=a;i<=b;i++){
    arr.push(i)
  }
  console.log(arr)
  return arr
}
