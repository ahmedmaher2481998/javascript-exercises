const sumAll = function(num1,num2) {
    if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR"
    let result = 0 ;
    let startNum = num1 < num2 ? num1 : num2 ;
    let endNum = num2 > num1 ? num2 : num1 
    for(let i = startNum; i <= endNum ; i++){ 
        result += i;
    }
    return result;


};

// Do not edit below this line
module.exports = sumAll;
