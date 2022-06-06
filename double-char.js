/* https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript

Instructions:
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
  
  Solution:
  */
  function doubleChar(str) {
  // Your code here
  //params -str
  //return - a string in which each character is repeated twice
  //example - 'call' = 'ccaall'
  //pseudo
  //what returns a string index char twice?
  //charAt?
//   for(let i = 0; i <str.length; i++)
//    return str.charAt(i)
//   console.log(str)
   return str.split("").map((letter) => `${letter}${letter}`).join("");
}
