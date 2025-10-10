const user = {
  username : "haris",
  price : 888,

  welcomemessage : function(){

    console.log(`${this.username}, "welcome"`);
      console.log(this);
    

  }
}
// user.welcomemessage()

// user.username = "sam"
// user.welcomemessage()

// console.log(this)

// function chai(){
//     let username = "haris"
//      console.log(this.username);
     
// }
//   chai()


// const chai = function()
// {
//     let username = "haris"
//     console.log(this.username);

// }


 const chai = () =>
{
    let username = "haris"
    console.log(this);

}


// chai()


// const addtwo = (num1 , num2 ) => {
   
// return num1 + num2

// }         method 1

// const addtwo = (num1 , num2 ) => num1 + num2    method 2
//const addtwo = (num1 , num2 ) => (num1 + num2 )  // method 3


const addtwo = (num1 , num2 ) => ({username : "haris"})  

   


console.log(addtwo(3,6));

