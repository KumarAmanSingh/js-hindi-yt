const score = 400
// console.log(score);
const bal = new Number(199.943) //this specifies that bal has datatype as Number
// console.log(bal);
// console.log(bal.toString().length); //converts bal's datatype from number to string and returns length
// console.log(bal.toFixed(2));//takes bal as floating number and sets the precision val to 2 decimal point
// console.log(bal.toPrecision(3)); //precision is used to get round off of numbers and converts number into string datatype
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')) //this includes commas between numbers as IN(indian standards)

//++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++//
// console.log(Math.abs(-4))
// console.log(Math.round(-4.9))
// console.log(Math.ceil(-4.1))
// console.log(Math.floor(-4.1))
// console.log(Math.min(-4,34,34,-22))
// console.log(Math.random()) //random gives any value between 0 and 1
// console.log((Math.random()*10)+1) // after adding 1,it will give number >= 1
//if number comes as 0.01 and (0.0.1 * 10)=0.1 ,hence we are adding 1 to it.so that it will give num>=1

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)

