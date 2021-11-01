let user={
    "name":"John",
    "surname" :"Smith",

};
// delete user.name;
// delete user.surname
// console.log(user)

// user.name='peter';

// console.log(user)


// delete user.name;
// console.log(user)
// ******************************************
// function isEmpty(obj){ 
//     for (key in obj){ 
//         return false;
//     }
//     return true;
// }
// let schedule={};

// alert( isEmpty(schedule) ); // false
// *******************************************
// let salaries = {
//     John: 100,
//   Ann: 160,
//   Pete: 130

//   }
//   function sum(obj){ 
//     let result = 0 ;  
//     for(key in obj){
        
//         result += obj[key];
//       }
//       return result;

//   }
//   console.log(sum(salaries));
// *********************************************
function multiplyNumeric(obj){ 
    for(let key in obj ){ 
        if(!(typeof(obj[key] ==  'number'))) continue; 
        obj[key]*= 2;
        
    console.log(obj);
    
}
/*
function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }
  */
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu); 
  console.log(menu) 