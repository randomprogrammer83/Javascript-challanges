//higher order function

function repeat(fn,n=5)
{
    for(let i=0;i<n;i++)
    {
        fn();
    }
       
}
repeat();