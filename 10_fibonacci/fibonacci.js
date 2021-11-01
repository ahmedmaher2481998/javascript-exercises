const fibonacci = function(n) {
    if(n < 0 ) return 'OOPS';
    if(Number.isInteger(n+0)) n = parseInt(n);
    let n1 = 0, n2 = 1 , next;
    for(let i = 1 ; i < n;i++){ 
       next = n1 + n2 ;
       n1 = n2 ;
       n2 = next;
    }
    return(n2)
};
1,2,3,4,5,6,7 , 8
1,1,2,3,5,8,13,21
// Do not edit below this line
module.exports = fibonacci;
