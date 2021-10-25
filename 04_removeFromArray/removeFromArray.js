const removeFromArray = function(a,b,c,...) {
    let arr= arguments[0];
    for(let i = 1 ; i < arguments.length; i++){
        let index = arr.indexOf(rmElement);

        if(index > 0 ){
            arr.splice(index,1)

        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
