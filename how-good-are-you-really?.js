/* https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

How good are you really?

Instructions

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

Solution:
*/
function betterThanAverage(classPoints, yourPoints) {
  console.log(classPoints, yourPoints)
  
  
  //complex way
//   const classAverage = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
//   classAverage([99, 45, 26, 7, 11, 122, 22]);
//   const average = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;



//simplified
  let sum = 0
  classPoints.forEach(score => sum += score)
   let average = sum / classPoints.length
  console.log(sum, average)
  
  
  
//   console.log(average([90,78,72,80,65]));

//   classPoints = [80, 70, 75, 90, 72]
//   yourPoints = 92
//   const classAverage = (classPoints / classPoints.length)
 
 
 if(yourPoints > average){
    return true
  }else {
     return false
  }
}


