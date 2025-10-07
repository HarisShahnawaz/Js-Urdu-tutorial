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
 