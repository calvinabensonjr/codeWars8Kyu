/* https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript

Quarter of the year

Instructions
Output
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.


Solution:
*/

const quarterOf = (month) => {
  // Your code here
//   month = [1,2,3,4,5,6,]
  //first quarter 1-3
  if(month === 1 || month === 2 || month === 3){
   return 1
  }else if(month === 4 || month === 5 || month === 6){
    return 2
  }else if(month === 7 || month === 8 || month === 9){
    return 3
  }else if(month === 10 || month === 11 || month === 12){
    return 4
  }
  //second quarter 4-6
  //third 7-9
  //fourth quarter 10-12
}
