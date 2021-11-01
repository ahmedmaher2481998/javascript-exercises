const palindromes = function (words) {
    panc = ['.','!',',',' ',"'",'?']
    let letters = words.split('')
                                .filter(letter => panc.includes(letter)? false : true)
                                .map(letter=> letter.toLowerCase());

    let reversed = words.split('')
                                    .filter(re => panc.includes(re)? false : true).reverse()
                                    .map(re=> re.toLowerCase());

    for(let i=0; i < letters.length; i++){ 
        if(letters[i] == reversed[i]) continue;
        else return false;
    } 
    return true;
};
// Do not edit below this line
module.exports = palindromes;
