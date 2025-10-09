// let a = 10
// const b = 20
// var c = 30
// var c = 300

let a = 300
if(true){
let a = 10
const b = 20
// console.log("inner :", a) ;


}


// console.log(a);
// console.log(b);
// console.log(a);

// nested scope


function one(){
 const username = "haris"

 function two(){
    const website = "youtube"
    console.log(username);
    
 }
//   console.log(website);
  
  two()
}
// one()

if(true){
    const username ="haris"
    if(username === "haris"){
     const website = "  youtube"
    //  console.log(username + website);
     
    }
    // console.log(website);
    
}
// console.log(username);


//  ***********interesting ********************
console.log(add1(5));

function add1(num){
return num + 1

}



// add2(5)  error Cannot access 'add2' before initialization

const add2 = function(num){
    return num + 2
}

console.log(add2(5));