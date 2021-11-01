let user={
    "name":"John",
    "surname" :"Smith",

};
delete user.name;
delete user.surname
console.log(user)

// user.name='peter';

// console.log(user)


// delete user.name;
// console.log(user)
// ******************************************
function isEmpty(obj){ 
    for(key in obj){
        if(key == undefined) return true;
        if(key in obj) return false;
        else return true;
    }
}
console.log(isEmpty(user))