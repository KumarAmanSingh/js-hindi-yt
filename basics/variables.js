const accountId = 12345
let accountEmail = "aman@gmail.com"
var accountPassword = "12345"
accountCity= "Begusarai"
// accountId = 12 //cannot be done because of const datatype
accountEmail = "ankit@gmail.com"   //can be changed 
accountPassword = "1234567890"
accountCity= "Khagaria"
let accountState;
// console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
/*
  prefer not to use "Var"
  Because of issue in block and functional scope
*/