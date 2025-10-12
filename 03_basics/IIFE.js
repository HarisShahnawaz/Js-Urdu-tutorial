// immediately invoked function expresssion(IIFE)


(function chai(){
    console.log(`db connected`);
    
})();


(  (name) => {
    console.log(`db connected two ${name}`);   
})("haris")



