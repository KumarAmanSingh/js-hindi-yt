let mydate = new Date()
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleTimeString())
// console.log(mydate.toUTCString())


// let newdate = new Date(2023,0,23,5,59,9)  //months are starting from 0 .. 5::59::09 is time
let newdate = new Date("2023-2-23")
// console.log(newdate.toLocaleString())

let mytimestamp = Date.now()
// console.log(mytimestamp)
// console.log(Math.floor(newdate.getTime()/1000)) //converts newdate's which is in milliseconds to seconds

let nd = new Date()
console.log(`${nd.getDate()} and the time is ${nd.getTime()}`)
