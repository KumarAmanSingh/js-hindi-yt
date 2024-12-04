class user{
    constructor(username,email,password){
        this.username=username  //this is used to refer method and variable of current instance,whenever new
        this.email=email       // object wants to access the these variable it will initialised new value    to it
        this.password =password  //instance means new form of object
    }
    encryptpassword(){
        console.log(`${this.password}abc`);
    }
    changeusername(){
        console.log(this.username.toUpperCase());
        
    }

}
const User = new user("aman","aman@gmail.com",123)
console.log(User.encryptpassword());
console.log(User.changeusername());


