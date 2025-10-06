// ARRAY


 const MyArr = [0,1,2,3,8,5]

const Myheroes = ["hulk","superman"]

const MyArr2 = new Array(2,5,6,8)

// console.log(MyArr2[2]);
 

//array methods

// MyArr.push(6,9,11)
// MyArr.push(22,33)
// MyArr.pop()


MyArr.unshift(6)
MyArr.shift()


// console.log(MyArr.includes(8));

// console.log(MyArr.indexOf(77));

// console.log(MyArr.includes(11));

// console.log(MyArr);

 const newArr = MyArr.join()

//  console.log(MyArr);
//  console.log(newArr);
//  console.log( typeof newArr);
//  console.log( typeof MyArr);



// slice  spice

// console.log("A" , MyArr);

// const myn1 = MyArr.slice(3,5)

// console.log(myn1);
// console.log("B" , MyArr);

// const myn2 = MyArr.splice(3,5)
// console.log("C" , MyArr);
// console.log(myn2);

const marvel_heros = ["ironman","spiderman","thor"]
const dc_heros = ["superman","batman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_heros = [...marvel_heros,...dc_heros]
console.log(all_heros);


const anotherarray = [1,2,3 ,[4,5,6,] ,7,[6, 7, [4,5]]]

const real_anotherarray = anotherarray.flat(3)

console.log(anotherarray );
console.log(real_anotherarray );


