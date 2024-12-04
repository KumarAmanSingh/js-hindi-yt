const user = {
    username :"AMAN",
    price:999,
    welcomemsg : function(){
         console.log(`${this.username},welcome to website`);
         console.log(this);  //this gives current context for this variable
    }
}
// user.welcomemsg();
// user.username = "sam"
// user.welcomemsg();

// console.log(this); //in applications this will give empty object while in website this will give window obj

function chai(){
    let username = "Amna"
    console.log(this.username);  //this will only work on objects not inside function
}

// const user1 = function(){
//     let username = "Amna"
//     console.log(this.username);  //this will not work on function atored in variables
// }

//+++++++++++++++++++++++++++++++ arrow function ++++++++++++++++++++++++++++++++++++//
const user1 = () => {   //remove function word and keep => called as arrow function
    let username = "Amna"
    console.log(this.username);
}
// user1()

// const addtwo = (num1,num2) => {
//     return num1+num2                 //normal arrow function
// }
// const addtwo = (num1,num2) => (num1+num2)  //implicit return, in this we are removing {} and return keyword
// console.log(addtwo(30,4))
const addtwo = () => ({username:"aman"})  //for printing object we have to use () for sure
console.log(addtwo());




