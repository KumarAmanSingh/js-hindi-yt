//primitive (call by value)
// string,number,null,undefined,boolean,symbol,bigint

const name = "aman"
const age = 20
const address = null
let occupation;
const gf = false
const car1 = Symbol("a")
const car2 = Symbol("a")
// console.log(car1==car2)
const bignumber =23423523423523n

//Non-primitive (call by reference)
//array , object,function

const heros = ["saktimaan","dogo","superman"]
let myobj = {
    name : "aman",
    age : 20
}
const myfun = function(){
     console.log("hello, Aman!")
}

//+++++++++++++++++++++++++++++++++//++++++++++++++++++++++++++++++++++++//
//stack(primitive) and heap(non-primitive)
//stack takes copy of original value while Heap takes refrences from original value

let username1 = "AmanKumar"
let username2 =  username1
username2 = "Sambhav"
// console.log(username1) 
// console.log(username2)

//heap 
let user1 = {
   name:"aman",
   upi:"aman@ybl"
} 
let user2 = user1
user2.name = "sambhav"
user2.upi = "sambhav@ybl"

console.log(user1.name);
console.log(user1.upi);
 //in heap it takes refrences of original value.
 //in refrence the change is done in original value


