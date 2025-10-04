// premitive 

// 7 types
    // string
    // Number
    // boolean
    // undefined
    // null
    // symbol
    //bigint
    const score = 100
    const scoreValue = 100.3
     let name = "haris"
    const IsLoggedIn = true

    const outsidetemp=null

    let  userEmail;  

    let userEmail2 = undefined

    const id = Symbol('123')
     const anotherid = Symbol('123')


//    console.log(id);
//    console.log(anotherid);

//    console.log(anotherid == id);


   const bigNumber = 7376363636636363663666363636n

    
   
   
   



    // non premitive data types(reference)

    //array
    //objects
    //functions

    const heroes = ["ironman", "hulk", "natasha"];
    let MyObj= {
        name  :"haris",
        age : 22,
    }

const myFunction = function() {
    console.log("Hello world");
    
}

console.log(typeof bigNumber);
console.log(typeof myFunction);

// Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

//**************************************************** */


// stack (primitive), heap(non primitive)

let  myYoutubeName = "HARISSHAHNAWAZ8888"

let anothername = myYoutubeName

anothername = "haris and code"
console.log(anothername);
console.log( myYoutubeName)


let userone ={
    email : "harisshahanawaz97@gmail.com",
    upi : "0322",
}

let usertwo = userone

usertwo.email = "google@gmail.com"

console.log(userone.email);
console.log(usertwo.email);
