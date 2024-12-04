// falsy value
// false, 0, -0,BigInt 0n, "", null, undefined, NaN

// truthy value
// "false", "0", " ", [], {},function(){}
// In string(means in double quote) all values are truthy,empty function is also a truthy val

// const useremail = []
// if(useremail.length===0){
//     console.log("array is empty");
// }

// const object = {}
// if(Object.keys(object).length === 0){
//     console.log("Object is empty");
// }

//Nullish coalescing operator(??) : null undefined
let var1;
var1 = 5 ?? 10    // takes first value
var1 = null ?? 10 // checks value other than null nd print
var1 = undefined ?? 15 
// console.log(var1);

// Terniary operator 
// condition ? true : false 
const icetea = 80
icetea>=50 ? console.log("more than 50"): console.log("less than 50");


