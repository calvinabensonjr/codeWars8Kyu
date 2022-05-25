/* https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

Instructions

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

Solution:
*/
function areYouPlayingBanjo(name) {
//   if(name.includes("r")){
//   return name  + " " +  "plays banjo"
//     }else if(name.includes("R")){
//       return name  + " " +  "plays banjo"
//     }else{
//       return name  + " " +  "does not play banjo"
//     }
  let firstLetter = name.charAt(0)
  if(firstLetter === 'r' || firstLetter === 'R'){
    return name  + " " +  "plays banjo"
  }else{
    return name  + " " +  "does not play banjo"
  }
}
