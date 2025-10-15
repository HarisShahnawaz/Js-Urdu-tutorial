//if


// if(true)
// {
  
// }
// if(false)
// {
  
// } // code dont run  bcz condition is false

const isuserloggedin = true
const temprature = 41


if(temprature < 33){
   console.log("less than 50");
} 
else{
console.log("temprature is higher than 50");
}


if(2=="2"){
   console.log("executed");
}    // executed bcz of ==


if(2==="2"){
   console.log("executed");
}
// 2>=2
// 3!=2

// <,>,<=,>= ,==,!=,===,!==


const score = 200

if(score > 100){
    const power = "fly"
    console.log(`user power : ${power}`);
    
}




const balance = 1000

// if(balance > 500) console.log("test");

if(balance < 500){
    console.log("less than 500");
    
}else if(balance < 700){
  console.log("less than 700");
}
else if(balance < 900){
  console.log("less than 900");
}
else {
  console.log("less than 1200");
}



const UserLoggedIn = true
 const  Debitcard = true
 const LoggedInFromGoogle = false
const LoggedInFromEmail = true

 if(UserLoggedIn &&  Debitcard && 2==2){    //2===3 if one statement is wrong the if condition does not work
    console.log("Allow  to buy cources");
    
 }

if(LoggedInFromGoogle || LoggedInFromEmail ){
   console.log("user logged in");
   
}