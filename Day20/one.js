
localStorage.setItem("name","Aman singh");

const getname=localStorage.getItem("name");

console.log(getname);

// using JSON 
localStorage.setItem("person", JSON.stringify({name:"Aman singh", age:20}));
// here person is the key , Json stringy convert value in string
const getperson=JSON.parse(localStorage.getItem("person"));

// to get the item from the local storage use key "person"

console.log(getperson);

// data print in the form of object