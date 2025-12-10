class User {
 constructor(username){
    this.username = username;
 }
 LogMe(){
    console.log(`Username is ${this.username}`);
}
}

class Teacher extends User{
  constructor(username,email,password){
    super(username)
    this.email = email
    this.password = password

  }

  addCourse(){
    console.log(`this course was added by ${this.username}`);
    
  }
}
    const chai =  new Teacher("haris","haris@gmail.com","987655")
    // console.log(T1);
    
    chai.addCourse()

    const masalachai = new User("harisssss")

    masalachai.LogMe()
    chai.LogMe()
    chai.addCourse()

    console.log(chai === masalachai);
    console.log(chai === Teacher);
    console.log(chai instanceof Teacher);
    console.log(chai instanceof User);


    