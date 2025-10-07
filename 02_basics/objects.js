// singelton
// onject.create

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name : "haris",
    "full name" : "haris shahnawaz",
    age : 18,
    [mySym] : "mykey1",
    email : "haris@gmail.com",
    location : "lahore",
    isLoggedIn : false,
    lastLogginDays : ["monday","friday"]

}
// 

// console.log( JsUser[mySym]);
// console.log( typeof JsUser[mySym]);


// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// //console.log( JsUser["email"]);
JsUser.email = "haris777777@chatgbt.com"

///console.log( JsUser["email"]);

//Object.freeze(JsUser)

JsUser.email = "haris777777@google.com"

//console.log( JsUser);

JsUser.greeting = function() {
    console.log("hello js user ");
    
}

JsUser.greetingtwo = function() {
    console.log(`hello js user , ${this.name}`);
    
}
console.log(JsUser.greeting);

console.log(JsUser.greeting());
