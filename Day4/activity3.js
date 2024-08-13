// print 1 to 10 number but skip 5 using the continue keyword

let num=1;

for(let i=1;i<=10;i++)
{
    if(i==5)
    {
        continue;
        
    }
    console.log(i);
}
// print the number from 1 to 10 but stop the loop when the number is 7

{
    let num=10;
    for(let i=1;i<=num;i++)
    {

        if (i==7) {
            break;
        }
        console.log(i);
    }
}