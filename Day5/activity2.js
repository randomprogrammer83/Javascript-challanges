// sum of two number using the arrow function

const sum=(a=20,b=10)=>{
  return a+b;
}

console.log(sum());


/// string manipulation

const strings=()=>{
    let str="hello world@";

   
    return str.includes('@')
}
console.log(strings());