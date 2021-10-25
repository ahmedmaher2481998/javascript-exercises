const removeFromArray = function(arr,...items) {
    for(let i = 0 ; i < items.length; i++){
        if(!arr.includes(items[i])){ 
            continue;
        }
        let index = arr.indexOf(items[i]);
        arr.splice(index,1);
    }
    return arr;
   
};

// Do not edit below this line
module.exports = removeFromArray;
