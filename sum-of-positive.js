/* https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

Sum of positive

Instructions

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

Solution:
*/
function positiveSum(arr) {
//   if(arr % 2 === 0){
//     return sum
//   }else{
//     return 0
//   }
  
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) 
        sum = sum + arr[i]
    }
    return sum
}


