// implement the comparison operator


//greater than
let num=100;

if (num>0) {
   console.log('the greatest no is',num);  
}

//smaller than
{
    let number=-100;

    if (number<0) {
       console.log('the smallest no is',number);  
    }
}



// 1 : compare using ==
//Performs type conversion (coercion) if necessary before making the comparison.
//Checks for equality of values after converting them to a common type.


{
    let a=10;
    let b=5;
    console.log(a==b);
}
{
    console.log('5' == 5); // true, because '5' is converted to the number 5
console.log(true == 1); // true, because true is converted to the number 1

}





// 1 : compare using ===
//does not perform the type conversion
//checks for equality both value and types

{
    let a=10;
    let b=5;
    console.log(a===b);
}
{
    console.log(5 === '5'); // false
console.log(0 === false); // false

}
