// create a private counter 

function myCounter(){
    let count=0;
    return   function increment()
    {
        count++;
        console.log(count);
        return function decrement(){
            count--;
            console.log(count);
        }
    }

}

let counter=myCounter();
const dec=counter();
dec();
// counter();