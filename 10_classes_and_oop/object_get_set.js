const user = {
    _email : "haris@example.com",
    _password : "hagt566",


     get email(){
     return this._email.toUpperCase()
  },

  set email(value){
    this.email = value
  }
};

const tea = Object.create(user)
console.log(tea.email);

  