/* https://www.codewars.com/kata/55a5befdf16499bffb00007b/train/javascript


Instructions:

Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

Please use the following function names:

addition = add

multiply = multiply

division = divide (both integer and float divisions are accepted)

modulus = mod

exponential = exponent

subtraction = subt

Note: All math operations will be: a (operation) b



Solution:
*/
function add(a,b){
  let sum = a + b
    return sum
}

function divide(a,b){
  let quotient = a / b
    return quotient
}

function multiply(a,b){
  let product = a * b
    return product
}

function mod(a,b){
  let remainder = a % b
    return remainder
}
   
function exponent(a,b){
  let power = a ** b
    return power
}
    
function subt(a,b){
  let difference = a - b
    return difference
}

