function multiplyby5(num){
    return num*5;
}
multiplyby5.power =2;
console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);


function CreateUser(username ,score){
    this.username = username
    this.score = score
}

CreateUser.prototype.increment = function(){
    this.score++
}
CreateUser.prototype.printMe = function(){
    console.log(`the score is ${this.score}`);
    
}

const Ali = new CreateUser ("ali",3)
const Junaid =  CreateUser("junaid",37)

Ali.printMe()