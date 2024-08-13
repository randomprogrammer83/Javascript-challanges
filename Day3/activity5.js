// script for check no is positive negative

function checkno(no)
{

    if(no<0)
    {
        console.log("no is negative");
    }
    else{
        console.log("no is postive");
    }
}
checkno(0);

// script to check the voting eligiblity

function voting(age)
{
    if(age>=18)
    {
        console.log("eligible for voting and the age is :",age);
    }
    else{
        console.log("not eligible for voting the age is :",age);
    }

}

voting(14);