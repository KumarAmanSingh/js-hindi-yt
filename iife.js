//immediately invoked function expressions - iife
// function db() {
//     console.log("Db connected");
// }
// db()  

//for executing it fastly we are using iife and why iife?
//so, for removing the pollution of global scope means more things are there in global scope
//but we have to invoke it fastly so, we are packing the function in () parenthesis and calling it
(function db() {
    console.log("Db connected");
})() ;

//(1)(2) first one packs function in it and second one calls it
// ; - semicolon is very important
//if we are calling another function before ending the first function using semicolon then next fn will not get invoked
//apply on arrow function
((name) => console.log(`Db connected to ${name}`))("aman"); //declare in 1st and call in 2nd




