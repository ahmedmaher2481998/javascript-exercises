const reverseString = function(str) {
    let letters = str.split('');
    let reversedStr = "";
    for(let i = letters.length -1 ; i != -1 ; i--){ 
        reversedStr += letters[i];
    }
    return reversedStr;

};
console.log(reverseString("hello world !"));

// Do not edit below this line
module.exports = reverseString;
