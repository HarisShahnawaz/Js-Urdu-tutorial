const Mynum = [ 1,2,3]

//  const Mytotal = Mynum.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval : ${currval}`);
    
// return  acc + currval

//  }, 0)             // 0,1,2,3 we can check these also for investigation study

const Mytotal = Mynum.reduce((acc,currval) => acc+currval ,0)
//   console.log(Mytotal);


  const Shoppingcart = [
    {
     itemname: "js course",
     price: 999,
    },
     {
     itemname: "mobile app course",
     price: 1299,
    },
     {
     itemname: "python course",
     price: 1999,
    },
     {
     itemname: "ai course",
     price: 3599,
    },
]

 const pricetopay = Shoppingcart.reduce((acc,itemname) => acc + itemname.price , 0)

console.log(pricetopay);



 
 