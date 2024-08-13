// use a template litreals 
let name="aman"
let age=20;

console.log(`Name:${name}\n Age:${age}`);

//create a multi line string

let createMultiline=`this is a multi line string create using the teplate literlas
`;

console.log(createMultiline);

// Array destructuring in  javascript

let arr=[1,2,3,4,5,6];

let [a,b,c,d]=arr;
console.log(a,b,c,d);

// Object Destructure in js 
let obj={
    name:"aman",
    age:20,
    city:"delhi"

}

console.log(`Name is:${obj.name} \n Age is :${age}`);

// Introducing the spread and rest operator in js 
{
    //spread operator
    let arr=[1,2,3,4,5,];
    let arr2=[6,7,8,9,10];
    let arr3=[...arr,...arr2];
    console.log(arr3);
}


{
    //Rest Operator

    function sum(...numbers)
    {
return numbers.reduce((acc,curr)=> acc+curr,0)
    }
    console.log(sum(1,3,3,4,5));
}