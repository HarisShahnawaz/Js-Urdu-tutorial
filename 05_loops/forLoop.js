// for

for (let  i = 0;  i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
        
    }
    // console.log(element ); 
}

// console.log(element);  out of scope so this gave an error


for (let i = 1; i <= 10 ; i++) {
    // console.log(`outerloop value : ${i}`);
    
    for (let j = 1; j <=10 ; j++) {
      
        // console.log(`innerloop value : ${j} and outerloop value : ${i}` );
        // console.log(i + '*' + j + '=' + i*j) ;
        // console.log(`${i}*${j} = ${i*j}`);
        
        
    }
}
let MyArray =  ["batman","superman","hulk"]
console.log(MyArray.length);

for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    console.log(element);
    
}


// break and continue

// for (let i = 0; i <=20 ; i++) {
//     if (i == 5) {
//         console.log("detected 5"); 
//         break     
//     }
    
//    console.log(`value of i is : ${i}`);
   
    
// }

for (let i = 0; i <=20 ; i++) {
    if (i == 5) {
        console.log("detected 5"); 
        continue  
    }
    
   console.log(`value of i is : ${i}`);
   
    
}