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


