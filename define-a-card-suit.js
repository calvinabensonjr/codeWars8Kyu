/* https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript

Define a card suit

 
Instructions

You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'


Solution:
*/

function defineSuit(card) {
  // good luck
  if(card.includes('♣')){
    return 'clubs'
  }else if(card.includes('♦')){
    return 'diamonds'
  }else if(card.includes('♥')){
    return 'hearts'
  }else if(card.includes('♠')){
    return 'spades'
  }else{
    undefined
  }
  
}

