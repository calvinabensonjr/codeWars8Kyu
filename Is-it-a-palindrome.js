/* https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

Instructions:
Write a function that checks if a given string (case insensitive) is a palindrome.


Solution:
*/

function isPalindrome(x) {
  //first step: put each character of y into and array. Ex. 'abc' becomes ['A' ,'b' ,'c']
 let y = x.split('')
 
//  next step: is to reverse it. Ex. ['c' , 'b', 'A'] 
//  join; 'cbA'
//  lowercase; cba
 y = y.reverse().join('').toLowerCase()
  x = x.toLowerCase()
  console.log(x,y)
  
  if(x === y){
    return true
  }else{
    return false
  }
}

/


