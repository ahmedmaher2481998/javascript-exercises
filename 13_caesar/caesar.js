const caesar = function(str,key) {
 
 str = str.split('')
 str.map((char,indx)=> str.charCodeAt(indx)+key)
 str = str.join('')
 return str;
};

// Do not edit below this line
module.exports = caesar;
