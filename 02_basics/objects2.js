//const fbuser = new Object()

const fbuser = {}

fbuser.id = "abc555"
fbuser.name = "haris"
fbuser.isloggedin = true


// console.log(fbuser);

 const regularuser = {
    email : "haris @gmail.com",
    fullname : {
        userfullname : {
            firstname : "haris",
            lastname : "shahnawaz"

        }
    }
 }
 //console.log(regularuser.fullname.userfullname.firstname);

 const obj1 = {1 :"a", 2 :"b"}
 const obj2 = {3 :"c", 4 :"d"}
  const obj4= {6:"c", 5:"d"}


 //const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({} ,obj1,obj2,obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
 console.log(obj3);
 

 const users = [
    {
        id : 1,
        email : "haris@gmail.com",
    },
    {
        id : 1,
        email : "haris@gmail.com",
    },
    {
        id : 1,
        email : "haris@gmail.com",
    }
 ]

 users[1].email

 console.log(fbuser);
 
 console.log(Object.keys(fbuser));
 console.log(Object.values(fbuser));
 console.log(Object.entries(fbuser));
 
 console.log(fbuser.hasOwnProperty("isloggedin"));
 console.log(fbuser.hasOwnProperty("islogged"));
