//Higher order functions

const array = ["1","2",3,"4",5]
// array.forEach(function (val){
//     console.log(val);
// })

//use arrow function
// array.forEach((val)=>{   //arrow fn 
//     console.log(val);
// })

//using callback fn
// function printme(val){
//     console.log(val);
// }
// array.forEach(printme); //call_back function name

//more about arrow-functon
array.forEach( (val, index, array)=>{
//  console.log(val, index, array);
} )

const mycoding = [
    {
        language:"javascipt",
        working:"software devs"
    },
    {
        language:"cpp",
        working:"development"
    },
    {
        language:"python",
        working:"analyze data"
    }
]

mycoding.forEach( (item) => {
console.log(`${item.language} its working is ${item.working}`);
})




