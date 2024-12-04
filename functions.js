// function saymyname(){
//     console.log("a");
//     console.log("m");
//     console.log("a");
//     console.log("n");
// }
// saymyname //reference
// saymyname() //execution
// function addtwonumber(num1,num2){   //(parameters)
//     console.log(num1+num2);
// }
// addtwonumber(3,4) //while giving values it called (arguments)

// function addnumber(num1,num2){
//     // let ans = num1+num2
//     // return ans
//     return num1+num2
// }
// const result = addnumber(3,4)
// console.log("Result: ",result);

// function userlogin(username){
//     return `${username} just logged in`;
// }
// console.log(userlogin("Aman"));

function userlogin(username){
    if(username === undefined){  // if(!username){......} same as undefined
        return `Please enter a name`
    }
    return `${username} just logged in`
 
}
console.log(userlogin("MANA"));




