const UserEmail = [] 
if (UserEmail) {
    console.log("Got user email");
    
} else {
     console.log("dont have user email");
     
}
// falsy values

// false , 0 ,-0, bigint 0n,null,undefined,NaN, ""  all are falsy values 

// truthy values

// true ,"0" ,"false"," ",[],{},function(){}


// if(UserEmail.length === 0){
//     console.log("array is empty");
// }


const emptyobj ={}

if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty");
    
}

// nullish coalescing operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

val1 = undefined ?? 15

console.log(val1);
