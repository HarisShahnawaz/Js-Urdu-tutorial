// Dates

let myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());

// console.log(typeof myDate);


// let myCreatedDate = new Date(2023, 0 ,23)

// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 4 ,23 , 3, 8)
let myCreatedDate = new Date("2023-04-22")

// console.log(myCreatedDate.toLocaleString());

// console.log(myCreatedDate.getFullYear());
// console.log(myCreatedDate.getDay());
// console.log(myCreatedDate.getDate());
// console.log(myCreatedDate.getMonth());
// console.log(myCreatedDate.getSeconds());

let mytimestamp = new Date()

// console.log(mytimestamp);
// console.log(myCreatedDate.getTime());
// console.log(myCreatedDate.getTime());


let newdate = new Date()
console.log(newdate);
console.log(myCreatedDate.getFullYear());
console.log(myCreatedDate.getDay());
console.log(myCreatedDate.getDate());
console.log(myCreatedDate.getMonth() + 1);
console.log(myCreatedDate.getSeconds());


newdate.toLocaleString('default' , {weekday : "long"})