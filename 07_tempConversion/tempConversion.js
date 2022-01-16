const ftoc = function() {
  let args = arguments[0]
  
  args =  (args - 32)*(5/9)
  return Math.round(args *10)/10
};

const ctof = function() {
  let args = arguments[0]
  args =  args * (9/5) + 32 
  return Math.round(args *10)/10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
