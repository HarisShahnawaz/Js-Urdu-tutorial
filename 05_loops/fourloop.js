const myObject = {
   js : 'javascript',
   cpp : 'c++',
   css: 'css',
   rb : 'ruby'
}
for (const key in myObject) {
   // console.log(myObject[key]);
   console.log(`${key} shortcut for ${myObject[key]}`);
   
}

const programming = ["c++" , "js" , "ruby", "swift" , "docker"]

for (const key in programming) {
   
   console.log(key);
   
   
}