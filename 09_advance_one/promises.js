const promiseOne = new Promise(function(resolve,reject){
    //   do an async task
    // DB calls, cryptography ,network
     setTimeout(function() {
        console.log("async task is complete");
        resolve()
     },1000)
})
promiseOne.then(function(){
    console.log("promise consumed");
    
})
new Promise(function (resolve,reject) {
    setTimeout(function(){
        console.log("async task two");
        resolve()
    },1000)
}).then(function () {
    console.log("async two resolved");
    
})

const promiseThree = new Promise(function(resolve,reject){
setTimeout(function(){
 resolve({username : "haris" , email : "chai@example.com"})
},1000)
})
promiseThree.then(function (user) {
    console.log(user);
    
})
const promiseFour = new Promise(function(resolve,reject){
  setTimeout(function () {
    let error = false //true
    if (!error) {
        resolve({username: "haris" , password: "123"})
    } else{
         reject('ERROR: something went wrong')
    }
    
  },1000)
})

 promiseFour
 .then((user) => {
console.log(user);
 return user.username
})
.then(function(username){
    console.log(username);
    
})
.catch(function(error){
console.log(error);

})
.finally(function(){
    console.log("The promise is either resolved or rejected");
    
})

const promiseFive = new Promise(function(resolve,reject) {
     setTimeout(function(){
        let error = true;
        if (!error) {
        resolve({username : "JAVASCRIPT" , password: "123"})

        }else{
            reject("Error:JAVASCRIPT WENT WRONG")
        }
     },1000)
}) 
async function  consumepromiseFive() {
  try {
     const responce = await promiseFive;
   console.log(responce);
  } catch (error) {
    console.log(error);
    
  }
   
}
consumepromiseFive();

// async function getAllUsers(){
//  try {
//      const responce =    await fetch('https://jsonplaceholder.typicode.com/users')
            
//                const data = await responce.json()
//                 console.log(data);
//  } catch (error) {
//     console.log(error);
    
//  }
// }
// getAllUsers()

fetch('https://api.github.com/users/harisshahnawaz')
.then((responce) => {
    return responce.json();
     
}).then((data)=> {
   console.log(data);
   
} )
.catch((error)=> {
    console.log(error);
    
})