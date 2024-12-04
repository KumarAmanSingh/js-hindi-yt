// //promise is created in two part after storing in variables
// const promiseone = new Promise(function(resolve,reject){
//         //do an async task
//         //db calls,network calls,cryptography
//         setTimeout(function(){
//             console.log("async task is completed")
//             resolve()
//         },1000)
// })  

// promiseone.then(function(){
//     console.log("promise consumed");
    
// })
// //promise is created in one part without storing somewhere
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("new promise created")
//         resolve()
//     },1000)
    
// }).then(function(){
//     console.log("new promise consumed");
    
// })

// const promisethree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"aman",email:"amansinghh8116@gmail.com"}) //connect promise using .then()
//     },1000)
// })
// promisethree.then(function(e){     //fn will print the value of resolve using parameter 'e' in this case
// console.log(e);
// })


// const promisefour=new Promise(function(resolve,reject){
//    setTimeout(function(){
//         let error = true
//         if(error){
//             resolve({username:"aman",password:"a1m2a3n4"})
//         }
//         else{
//             reject('ERROR: something went wrong')
//         }
//    },1000)
// })
// promisefour
// .then(function(user){
// return user.username
// })
// .then((username)=>{
// console.log(username);
// })
// .catch(function(e){
//     console.log(e);
// }).finally(()=>{
//     console.log("the promise is either resolved or rejected")
// })


// const promisefive =  new Promise(function(resolve,reject){
//     setTimeout(function(){
//           let error=true
//           if(!error){   
//             resolve({username: "javascript",password: "123"})
//           }
//           else{
//             reject('ERROR: JS went wrong');
//           }
//     },1000)
// })
// //use async await in place of then() and catch() and async cannot handle error by itself so use try and catch
// async function consumepromisefive() {
//     try {
//         const response = await promisefive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumepromisefive()


// async function getallusers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() //when something takes time then we are using await
//         console.log(data);
        
//     } catch (error) {
//         console.log("error:",error);

//     }
// }
// getallusers() 


//using .then() and .catch()
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error);
})
