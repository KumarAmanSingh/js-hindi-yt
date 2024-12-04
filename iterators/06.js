const nums = [1,2,3,4,5,6,7,8,9]

// const mynums = nums.map( (val)=> val+10 )
// const mynums = nums.map( (val)=> { return val+10 } )
// chaining
const mynums =  nums
                    .map( (num)=>num*10)   //this chain will pass value to next chain(map)
                    .map((num)=>num+1)     //this chain will pass value to next chain(filter)
                    .filter((num)=>num>60)
console.log(mynums);