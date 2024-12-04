// const user = {
//     username: "aman",
//     age : 20,
//     email : "aman@gmail.com",
//     signedIN: true,
//     getUserdetails: function(){
//         // console.log("got user details from database");
//         // console.log(`username: ${this.username}`);
//         console.log(this);
        

//     }
// }
// // console.log(user.username);
// console.log(user.getUserdetails());

function user(username,logincnt,isloggedin){
    this.username=username;
    this.logincnt = logincnt;
    this.isloggedin= isloggedin;
    return this;
}
const user1details= new user("amna",21,true)
const user2details= new user("aman",21,true)
console.log(user1details)
console.log(user2details)