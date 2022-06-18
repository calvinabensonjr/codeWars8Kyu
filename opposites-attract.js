/* https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

Opposites Attract

Instructions

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

solution:
*/ 

  // moment of truth
  //boolean
  //condition if & else
  // even & odd
  //return true if in love (if even and odd pedals, then true)
  // else false
  
// if(flower1 === 'even' && flower2 === 'odd'){
//   return true
// }else if(flower1 === 'even' && flower2 === 'even'){
//   return false
// }else if(flower1 === 'odd' && flower2 === 'odd'){
//   return false
// }
  
//   if(flower1 % 2 === 0 && flower2 % 2 !== 0){
// return true
//     }else{
//       return false
//     }
  
  
  function lovefunc(flower1,flower2){
        if (flower1%2==0&&flower2%2!==0) {
          return true;
        }else if(flower1%2!==0&&flower2%2==0){
          return true;
        }else return false;
      }

