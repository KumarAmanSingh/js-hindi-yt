const name = "Aman"
const repoCount = 30
// console.log(name + repoCount);  //don't use + for concatination
// //use string interpolation(backticks(``))
// console.log(`my name is ${name} and my repocount is ${repoCount}`);

const gamename = new String('amansingh')
// console.log(gamename[3]);
// console.log(gamename.__proto__);
// console.log(gamename.length);
// console.log(gamename.charAt(4));
// console.log(gamename.indexOf('h'));
// console.log(gamename.toUpperCase());
// console.log(gamename.substring(0,4));
// console.log(gamename.slice(-8,4));  //it behaves like circular loop
const newstring = "    Aman-Singh    "
// console.log(newstring);
// console.log(newstring.trim()); //removes all space
// console.log(newstring.trim().replace("Aman","Singh"))
// console.log(newstring.includes("Aman"))
// console.log(newstring.includes("Amana"))

console.log(newstring.trim().split('-'))
