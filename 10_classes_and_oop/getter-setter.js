class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }
}
const haris =  new User("haris@example", "1234")
console.log(haris.password);
