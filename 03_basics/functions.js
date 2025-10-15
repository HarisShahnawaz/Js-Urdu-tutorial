
function SayMyName(){
console.log("H");
console.log("A");
console.log("R");
console.log("I");
console.log("S");
}

//SayMyName()
   //SayMyName

   
   
//    function addtwonum(num1,num2){
    
//     console.log(num1+num2);
//    }
   
   function addtwonum(num1,num2){
    
    // let result = num1+num2
    // console.log("student");

    return num1 + num2
    
    // return result
   }
       // addtwonum(5, "6")
        //addtwonum(5, "a")

        const result = addtwonum(5, 5)
   
//    console.log("Result :", result);
   

function loginusermessage(username)
{
    // if(username === undefined){
    //    console.log("plz enter username");
    //    return
    // }
    if(!username){
       console.log("plz enter username");
       return
    }
  return `${username} just logged in`
}

// console.log((loginusermessage("haris")))
// console.log(loginusermessage(""))
// console.log(loginusermessage())

function calculateCartprice(...num1){
    return num1
}

// function calculateCartprice(val1 ,val2 , ...num1){
//     return num1
// }

// console.log(calculateCartprice(56));
// console.log(calculateCartprice(56,33,44,55,6));

const user = {
    username : "haris",
    price : "17",
}

function handleobject(anyobject)
{
   console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
   
}

// handleobject(user)

// handleobject({
//     username : "harisssss",
//     price : 888
// })

const MyNewArr = [122,233,533,62,8222]

function return2ndval(getArr){
  return getArr[1]
}

 console.log(return2ndval( MyNewArr));
console.log(return2ndval([200,33,1111,334,5555]));

// this is comment 





