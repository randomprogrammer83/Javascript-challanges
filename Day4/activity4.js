//feature request

function numberprint()
{
    let num=0;

  do {
    console.log(num);

    num++;

  } while (num<=10);

}

numberprint();
// table of 5 using for loop in a script
{
    function printtable()
    {
        for (let i = 1; i <=10; i++) {
    
            let num=5;
            console.log(num*i);
           }
    }
    printtable();

}


//sum of 1 to 10 using the while loop

{
            function sumofNum()
            {
                let num=10;
            let sum=0;
              while(num>=0)
              {
                sum=sum+num;
                num--;

                console.log('sum is :',sum);
              }
            }

            sumofNum();

}

// factorial using do while  in script 

function calculatefact()
{
    let num=5;
    let fact=1;
    do {
        fact=fact*num;
        num--;
    } while (num>0);
    console.log(fact);

}

calculatefact();