const user = {
    username : "haris",
    logincount : 8,
    signedin: true,

     getUserDetails : function() {
      //   console.log("got user details from database");
      //   console.log(`username : ${this.logincount}`);
        console.log(this);
        
     }

}
console.log(user.username);
console.log(user.getUserDetails());

// console.log(this);   // you can access all data using this


function User(Username,loginCount,IsLoggedIn){
   this.username = Username
   this.loginCount = loginCount
    this.IsLoggedIn = IsLoggedIn
   


    this.greeting = function(){
      console.log(`${this.username}`);
      
    }
    return this;
}

const userone = new User("haris",8,true)
const usertwo =  new User("huzaifa",29,false)
const userthree=  new User("huzaifa",29,false)


{
   // console.log(userone.constructor);
   console.log(usertwo);
   console.log(userone);
   console.log(userthree);
   
}