function setusername(username){
    // conplex DB calls
    this.username = username
}

function createuser(username,email,password){
    setusername.call(this,username)
       this.email = email
       this.password = password
}
const user1 = new createuser("haris","example@.com",2222)
console.log(user1);
