// ES6


class User {
    constructor(username,email,password){
        this.username = username
        this.email =email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abd`
    }
}

const user1 = User("haris" , "example@gmail.com" ,"78938" )