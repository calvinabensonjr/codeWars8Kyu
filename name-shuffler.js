/* https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript

Name Shuffler

Instructions
Output
Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"

Solution:
*/

function nameShuffler(str){
  //Shuffle It
  return str.split(' ').reverse().join(' ')
  console.log(str)
}

