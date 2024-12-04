const num = [1,2,3,4,5]
for (const i of num) {  //using for-of loop
    // console.log(i);
}
const string = "Hello_World"
for (const i of string) {
    if(i=="_") continue; //if we doesn't want space
    // console.log(`characters are ${i}`);
}

const map = new Map()
map.set("IN","INDIA")
map.set("USA","United States Of America")
map.set("FR","France")

// console.log(map);
for (const [key,value] of map) {   //[] destructures the map
    // console.log(key,":-",value);
}

const obj = {
    1:"AMMA",
    2:"CHUTIYA"
}
// for (const [key,value] of obj) {
//      console.log(key,":-",value);
// }

//Iterate object using for-in loop beacuse for-of cant
const lang = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby"
}

for (const key in lang) {
    //  console.log(key);
//    console.log(`${key} shortcut for ${lang[key]}`);
        
    }

// on objects use for-in loop and on arrays use for-of loop 
// <------------------------------------------------------------------>
// for arrays, for-each loop gives values in array and for-in loop gives index of array

const prog = ["js","cpp","python"]
for (const i in prog){
        // console.log(i);  //for-in loop gives index only
        console.log(prog[i]); //like this we will get values using for-in loop
}

