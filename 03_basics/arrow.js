const user = {
  username : "haris",
  price : 888,

  welcomemessage : function(){

    console.log(`${this.username}, "welcome"`);
      console.log(this);
    

  }
}
user.welcomemessage()

user.username = "sam"
user.welcomemessage()

// console.log(this)
