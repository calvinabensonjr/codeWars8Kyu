/* https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript

Instructions:

Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

Solution:
*/
function sameCase(a, b){
  //first attempt, 4 passed, 4 failed
//   if(a === b){
//     return 1
//   }
//   return 0;
  //second attempt, 3 passed
//   if(a === b){
//     return 1
//   }else if(a !== b){
//     return 0
//   }else{
//     return -1
//   }
  //fourth attempt, 3 passed, closest one
//   if(a.toLowerCase() === a.toUpperCase() || b.toUpperCase() === b.toLowerCase()){
//     return 0
//   }else if(a.toLowerCase() === a.toLowerCase() || b.toUpperCase() === b.toUpperCase()){
//     return 1
//   }else{
//     return -1
//   }
 if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
    return -1
  }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
      return 1
  }else{
    return 0
  }
}


