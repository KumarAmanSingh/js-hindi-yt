const nums = [1,2,3,4,5,6,7,8,9]

// const mynums = nums.filter( (item) => item > 4 )
// console.log(mynums);
// const mynums = nums.filter( (item) => {   //if scope is opened{..} then use return keyword else simly item>4 as above line no. 3
//     return item > 4
// } )
// console.log(mynums);

const newnums = []
nums.forEach( (val)=> {
    if(val>4){
        newnums.push(val);
    }
})

console.log(newnums); 
