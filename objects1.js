const mysym = Symbol()
const  person = {
    name : "Aman Singh",
    rollnumber : 21103,
    class : "CSEB",
    location : "Bihar",
    isloggedin : true,
    lastlogin : ["sunday","tuesday"],
    [mysym] : "@"
}
// console.log(person.name);
// console.log(person["rollnumber"]); //in [] access objects with double quote
// console.log(typeof [mysym]);

person.name = "Aman"  //use to override the objects value
// console.log(person["name"]);
// Object.freeze(person) //freezes the object and values cant be changed after this
person.name = "Aman kumar"  //object is freezed so this will not work

// console.log(person)

// person.greeting = function(){
//     console.log("hello aman");
// }
// console.log(person.greeting())
person.greetingtwo = function(){
    console.log(`hello, ${this.name}`); //this is used for reference of name using string interpolation method
}
console.log(person.greetingtwo()); 

