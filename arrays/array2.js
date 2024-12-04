const non_veg = ["chicken","egg","prown"]
const veg = ["panner","mushroom","milk"]
// non_veg.push(veg)
// console.log(non_veg[3][2]) 
// const food = non_veg.concat(veg) //concat mergs arrays and send answer in new array

const food = [...non_veg,...veg]  //spread[...] behaves like concat but concat only works for two array but this works for more arrays
// console.log(food) 

const newarr = [1,2,3,[4,5],8,[9,0,[4,5,6]]]
const flatarr = newarr.flat(Infinity) // .flat(depth of newarray) but in general keep infinity as depth
// console.log(flatarr)

// console.log(Array.from("Aman"));
const a=900
const b=9200
const c=2900
console.log(Array.of(a,b,c));