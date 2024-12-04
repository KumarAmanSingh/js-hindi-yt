//reduce function
const mynums = [1,2,3]

// const mytotal = mynums.reduce(function (acc,currval){
//     console.log(`acc is ${acc} and currval is ${currval}`);
//     return acc+currval   //acc will be 0 and currval will be value coming from array(1,2,3)
// },0)      //0 will go to acc 
// console.log(mytotal);

//using arrow function
// const total = mynums.reduce( (acc,currval)=> acc+currval,0)
// console.log(total);

const shoppingcart = [
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"os course",
        price:500
    },
    {
        itemname:"coa course",
        price:290
    }
]

const total  = shoppingcart.reduce( (acc,item)=>acc+item.price,0)
console.log(total);