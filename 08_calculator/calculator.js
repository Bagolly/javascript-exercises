const add = (l_op, r_op) => l_op + r_op; 

const subtract = (l_op, r_op) => l_op - r_op;

const power = (l_op, r_op) => Math.pow(l_op, r_op);

const multiply = function(ops) {
  let total = 1;
  if(ops.length === 0)
    return 0;
  ops.forEach(x => total *= x);
  return total;
}

const sum = function(ops){
  let total = 0;
  ops.forEach(x => total += x);
  return total;
} 


const factorial = function(op) {
    let total = 1;
    
    for(; op > 0; op--){
      total *= op;
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
