// for of 

// ["" , "", ""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}
const greetings = "hello word"

for (const greet of greetings) {
    console.log(`each char is ${greet}`);
    
}

// maps

const map = new Map()
map.set('pak',"pakistan")
map.set('usa',"united states")
map.set('fr',"france")

// console.log(map);


for (const key of map) {
    console.log(key);
    
}

