// ES6


// class User {
//     constructor(username,email,password){
//         this.username = username
//         this.email =email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     Changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// } 

// const user1 =  new User("haris" , "example@gmail.com" ,"78938" )
// console.log(user1.encryptPassword());
// console.log(user1.Changeusername());

//behind the scene

function User(username,email,password) {
     this.username = username
        this.email =email
        this.password = password;
}
User.prototype.encryptPassword = function(){
     return `${this.password}abc`
}
User.prototype.Changeusername = function(){
     return `${this.username.toUpperCase()}`
}


const user2 =  new User("shahnawaz" , "example@gmail.com" ,"78938" )
console.log(user2.encryptPassword());
console.log(user2.Changeusername());