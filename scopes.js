var c = 300
let a = 100
if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);  // a is inside block scope so it can't be printed
// console.log(b);  //same
// console.log(c);     //but due to var it will get printed

function one(){
    const username = "Aman"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
//     two();
   // console.log(website); //it cant be called beacuse one can't access two but two can access one
   //example children can take big peoples icecream but big peoples cant
}
// one();


if(true){
    const username = "AMAN"
    if(username === "AMAN"){
        const website = " YOUTUBE"
        // console.log(username+website);
    }
    // console.log(website); website cant be accessed because its out of if loops block scope
}
// console.log(username);  username cant be accessed because its out of if loops block scope

//+++++++++++++++++++++++++++++++++++++++++++++++//++++++++++++++++++++++++++++++++++++++++++++++++//

// console.log(addone(5))   //Can access 'addone' before initialization because of normal func
function addone(num){
    return num+1
}
// console.log(addone(5))


console.log(add2(5))         //Cannot access 'add2' before initialization
const add2 = function(num){  //function value is stored in a variable 
    return num+2
}
// console.log(add2(5))
