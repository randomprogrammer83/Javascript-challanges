//introducing the closures
function outer(){
    let x=10;
    return function inner()
    {
        console.log(x);
    }
//   inne();

}

const inn=outer();
inn();


