function setusername(username){
  this.username=username;
}
function createuser(username,email,password){
    
    setusername.call(this,username) //call pass current execution value to another function
    
    this.email = email;
    this.password = password
}
const newuser = new createuser("aman","aman@gmail.com","12345")
console.log(newuser);

