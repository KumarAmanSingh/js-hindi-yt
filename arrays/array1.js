const myarr = [1,2,3,4,5]
const arr = new Array(1,2,3)
arr.pop()
arr.push(4)
arr.unshift(9) //adds elements at the starting of array 
arr.shift()    //pops the first element from array
// console.log(arr.includes(4))
// console.log(arr.indexOf(4)) //if not present returns -1
const newarr = arr.join() //join binds array and changes its type to string
// console.log(newarr);
// console.log(typeof newarr);

//slice and splice
console.log("A ",myarr)
const myn1 = myarr.slice(1,3) //it will take index 1,2 and neglect index 3...
console.log("B ",myn1)
console.log("orignal array ",myarr)
const myn2 = myarr.splice(1,3)
console.log("C ",myn2)
console.log("orignal array ",myarr)

//so in slice and splice,In slice it will not take the last range value while 
//in splce it will take the whole range and secondly,in slice it will not change the 
//original array while splice takes the elements out from the og array

