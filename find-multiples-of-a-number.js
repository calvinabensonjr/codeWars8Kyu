/* https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript


8 kyu
Find Multiples of a Number

Instructions:



In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.



Solution:
*/
//your code here
  //create a variable that takes in a value
  // then returns a list of its multiples, up to another value
  //we can show multiples of two by creating an if statement withh modulus of 2
  //a for loop^
  //only positive numbers, none with 0
  //limit is always higher than its base
  
//   let takeInValue = []
//   for(let i = 1; i < limit; i++){
//     if(limit % 2 === 0){
//       let digit = parseInt(integer[i])
//       takeInValue.push(digit)
//       console.log(digit)
//     }
    
//   }
  const arr = [];
  // variab;e creating the array for the numbers to be pushed into later
  for (let i = 1; i <= limit; i++) {
    //loop for that states if i is equal to 1, let it be less than or equal to the limit, which 
    //is supposed to be the highest multiple of the integer, then add 1 each time this is incremented
      if (integer * i <= limit) {
        arr.push(integer * i);
        console.log(integer)
        // if the integer times i, is less than or equal to the limit, then push it
        //into the array with the argument of integer times i 
        console.log(arr)
      }
  }
  return arr;
  
  
  
  
  Simple Solution:
  
  function findMultiples(int,limit){
  let result = []
  
  for (let i = int; i<=limit ; i+=int)
    result.push(i)
    
  return result
}
}

