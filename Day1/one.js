  // variable declration
var num=1000;
 
console.log(num);

//second task

let name="Aman Singh";

console.log(name);

// third task 

const number=true;

console.log(number);


        //   Summarry,  difference between var let const

        //var is a function scoped we can re-declare the var in the same function scope see the below example


        function exp()
        {
            console.log(x);/// not throwing error saying undefined  beacuse of initilization is not hoisted
            var x=20;
            console.log(x);
            var x=10;
            console.log(x);
        }
        exp();

        // let is a blocke scope it means the re-declaration is not allowed in the same scope


        function exp()
        {
            // console.log(x); ///  refrence error x  is not defined 
            let x=20;
            console.log(x);
    
            // let  x=10;  //  its not allowed  showing  reference error  x is already declared
            {
                let x=20;
                console.log(x);  // different scope allowed
            }
        
        }
        exp();

        // const is block scoped like a let scope in cost also the re-declaration is not allowed const are immutable
        // we cannot changed the value of the const

        
        function exp()
        {
            //console.log(x);/// throwing refrence error x is not defined
        
            const  x=20;
            //x=30     its not allowed in const section
            console.log(x);
             {
                const x=10;
                console.log(x);  //different scope are allowed
             }
        }
        exp();