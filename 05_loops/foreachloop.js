const coding = ["js", "ruby", "c++", "python", "java"];

// coding.forEach( function (items) {
// //    console.log(items);

// } )

// coding.forEach( (val) => {console.log(val)});
function printme(item) {
  console.log(item);
}
// coding.forEach(printme)

// coding.forEach((item ,index,arr) => {
//     console.log(item ,index,arr);

// })

const mycoding = [
  {
    languagename: "python",
    languagefilename: "python",
  },
  {
    languagename: "C++",
    languagefilename: "cpp",
  },
  {
    languagename: "javascript",
    languagefilename: "js",
  },
];

mycoding.forEach((item) => {
  // console.log(item.languagefilename);
  console.log(item.languagename);
});
