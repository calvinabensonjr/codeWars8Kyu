/* https://www.codewars.com/kata/5ab52526379d20736b00000e/train/javascript

Help the Elite Squad of Brazilian forces BOPE

Instructions

The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

PT92 - 17 bullets
M4A1 - 30 bullets
M16A2 - 30 bullets
PSG1 - 5 bullets

Example:

["PT92", 6] => 2 (6 streets 3 bullets each)
["M4A1", 6] => 1

The return Will always be an integer so as the params.

Solution:
*/
magNumber = info => Math.ceil(info[1] * 3/ {'PT92' : 17, 'M4A1' : 30, 'M16A2' : 30, 'PSG1' : 5}[info[0]])


//Params-info
//Return - integer(number of magazines)
//Example - ["PSG1", 6] => 6 (6 streets 3 bullets each, there 5 bullets in each magazine. Total of 30 bullets. Divide by 5 that is 6 mags)
  // no, its actually 18, 6 streets times 3 bullets, is 18. 
  //So if the amount of bullets is less than 18, for a guns magazine, there need to be another magazine added
  //if it still needs more, add another
//Pseudo
  //a function
  // a loop?
  //if statement?
  //modulus?
  //divide?
  // object

