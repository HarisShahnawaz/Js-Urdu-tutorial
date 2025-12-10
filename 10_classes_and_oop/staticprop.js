class User{
    constructor(username)
    {
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`);
        
    }
   static createid(){
        return `123`
    }
}
const chai = new User("haris")
// console.log(chai.createid());


class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone","i@phone.com")
iphone.logMe()
console.log(iphone.createid());


