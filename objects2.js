// const tinderuser = new Object()
const tinderuser = {}
tinderuser.id = "123am"
tinderuser.name= "Sambhav"
tinderuser.roll = 123
tinderuser.isLoggedIn = false
// console.log(tinderuser);
const regularuser = {
    name : "Sambhav",
    email : "sam@gmail.com",
    username : {
        fullname : {
            firstname : "Aman",        //nesting of objects
            lastname : "Singh"
        }
    }
}
// console.log(regularuser.username.fullname.firstname);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}
const obj4 = Object.assign({},obj1,obj2,obj3)// (final answer is stored in {} else answer will be stored in first place object(obj1))
// console.log(obj4);
// console.log(obj1==obj4); //because ans is stored in {} not obj1... refer mdn website 
const obj5 = {...obj1,...obj2,...obj3} //using spread method easy way to concat objects and arrays
// console.log(obj5);

//database objects are in arrays
const user = [
    {
        id : 1,
        name:"aman"    //0th index of user array
    },
    {
        id : 2,
        name : "sam" //1st index of user array
    }
]
// console.log(user[0].id); 
// console.log(Object.keys(regularuser)); //while getting all keys object stores it in one array and returns it
// console.log(Object.values(regularuser.username.fullname));
// console.log(Object.entries(regularuser));
// console.log(regularuser.hasOwnProperty('email')); //checks whether regularuser has particular key or not


const course = {
    coursename : "JS in hindi",
    price : "999",
    Buyer : "aman"
}
console.log(course.price);


