class User {
    constructor(email,password){
        this.email = email
        this.password = password
 
    }
  
    get email(){
       return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
       return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}
const haris =  new User("haris@example", "123adku")
// console.log(haris.password);
console.log(haris.email);

