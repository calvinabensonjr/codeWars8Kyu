/* https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

Convert number to reversed array of digits

Instructions

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

solution: 

function digitize(n) {
//   //code here
//   let arr = []
//   for(let i = n; i <= n; i++){
//     arr.reverse()
//   }
//   console.log(arr)
//   return arr
  const answer =[]
  const str = n.toString()

  for(item of str){
    answer.unshift(parseInt(item))
  }
  console.log(answer)
  return answer
}


New Solution:
*/
function digitize(n) {
//   //code here
  let arr = []
  let s = n.toString()
  console.log(s)
  for(let i = 0; i < s.length; i++){
    console.log(s[i])
    let digit = parseInt(s[i])
   arr.push(digit)
  }
  console.log(arr)
  arr.reverse()
  console.log(arr)
  return arr
  }
//   const answer =[]
//   const str = n.toString()

//   for(item of str){
//     answer.unshift(parseInt(item))
//   }
//   console.log(answer)
//   return answer
// 
