/* https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript

Beginner Series #4 Cockroach

Instructions

The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

Solution:
*/

function cockroachSpeed(s) {

//   console.log(Math.floor(s*27.778))
  return Math.floor(s*27.778)
}
