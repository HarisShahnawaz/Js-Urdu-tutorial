const { useEffect } = require("react");

const UserEmail = "haris@ai"

if (UserEmail) {
    console.log("Got user email");
    
} else {
     console.log("dont have user email");
     
}

// falsy values

// false , 0 ,-0, bigint 0n,null,undefined,NaN, ""  all are falsy values 

// truthy values

// true ,"0" ,"false"," ",[],{},function(){}


if(UserEmail.length ===0){
    console.log("array is empty");
    
}