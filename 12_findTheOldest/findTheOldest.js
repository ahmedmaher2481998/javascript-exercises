const findTheOldest = function(people) {
    let theoldest = people.sort((a,b)=> { 
        let agea = a.yearOfDeath - a.yearOfBirth;
        let ageb = b.yearOfDeath - b.yearOfBirth;
        if(!(a.yearOfDeath) ) {
            let now  = new Date().getFullYear()
            agea= now - a.yearOfBirth ; 
        }
        else if (!b.yearOfDeath) {
            let now = new Date().getFullYear()
            ageb = now -b.yearOfBirth;
        }
        return agea > ageb ? -1 : 1;
    })
    
    return (theoldest[0])

};

// Do not edit below this line
module.exports = findTheOldest;
