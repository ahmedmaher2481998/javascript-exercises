const ftoc = function(fr) {
  let cel = (fr - 32) / 1.8;  
  cel = Math.round(cel * 10) / 10.0 ;
  return cel ;

};
//Math.round(number * 10) / 10

const ctof = function(cel) {
  let fr = (cel * 1.8) + 32  ;
  fr = Math.round(fr * 10 ) / 10.0 ;
  return fr ;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
