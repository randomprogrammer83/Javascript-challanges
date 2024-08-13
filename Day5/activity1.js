// function declration

function checkevenodd()
{
    let num=10;
    if (num%2==0) {
        
        console.log("no is even",num);
    }
    else{
        console.log("no is odd",num);
    }
}

checkevenodd();


{
    // sqaure of a number

    function checkSquare()
    {
        let num=5;
        let square=num*num;
        
        return square;
    }


  console.log(checkSquare());  
}

// activity 2 


function maximumTwono()
{
    let num=10;
    let num1=20;
    if (num>num1) {
console.log(num);
    }

    else{
        console.log(num1);
    }
}
maximumTwono();

// cocncatnet the string


function concatString()
{
    let name="Aman  ";
    let name1="Singh";
    let name2=name.concat(name1);
    return name2;
}

console.log(concatString());