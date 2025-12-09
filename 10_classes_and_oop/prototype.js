// let MyName = "haris       "
// let Mychannell = "harryy       "
// // console.log(MyName.trim().length); 
// console.log(MyName.trueLength);


let Myheros = ["thor","spiderman"]

let heropower = {
    thor : "hammer",
    spiderman : "sling",

    getspiderpower : function(){
       console.log(`spidy power is ${this.spiderman}`);
       
    }
}
Object.prototype.haris = function(){
    console.log(`haris is present in all objects`);
    
}
Array.prototype.heyharis = function(){
    console.log(`haris say hello`);
}
heropower.haris()
Myheros.haris()
// heropower.heyharis()
Myheros.heyharis()


// inheitance
const user = {
    name : "haris",
    email : "harisshahnawaz97@gmail.com"

}

const Teacher = {
    makevideo : true,
}

const teacingassitant = {
    isavailable : false,
}
const TAsupport = {
    makeAssignment : "js assignment",
    fulltime : true,

  __proto__ : teacingassitant
}
Teacher : __proto__ 

// modern syntax

Object.setPrototypeOf(teacingassitant , Teacher)

let anotheruser = "harissss    "

String.prototype.trueLength = function(){
    
    console.log(`${this}`);

    console.log(`truelength is ${this.trim().length}`);
    
}
anotheruser.trueLength()
"abhishek".trueLength()
"arshdeep".trueLength()