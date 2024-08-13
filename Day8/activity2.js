function multoNum(a,b=1)
{
return a*b;
}

console.log(multoNum(5));// without passing second parameter
console.log(multoNum(5,6));// with passing second parameter
// the second output is 30 bcz of 1 replace to 6

//

const obj={
   name:'sagar',
   age:20,
   city:'nagpur',
   sayHello()
   {
console.log("hello",obj.name,'your are so young');
   }
};
obj.sayHello();


// computed property based variable:

const name="aman";
const objs={
        [name]:'Singh'
};

console.log(objs);