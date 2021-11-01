const add = function(a,b) {
	return a +b 
};

const subtract = function(a,b) {
	return a -b ;
};

const sum = function(b) {
  let sum = b.reduce((a,b)=> a +b,0);
  return sum;
};

const multiply = function(b) {
  let total = b.reduce((a,b)=> a*b);
  return total;
  } ;


const power = function(num, p) {
  let total = Math.pow(num,p);
  

  
  
  return total;
	
};

const factorial = function(num) {
  let total = 1 ; 
  
  for(let i = 1; i <= num; i++){ 
    total *= i ;
  }
  return total;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
