// use the ternery operator and compare the value
{
let num=4;

let res=(num%2==0)?"even":"odd"
console.log(res);
}


// script for addition sub mul div rem
{
            function add(a,b)
            {
            return a+b;
            }

            function sub(a,b)
            {
            return a-b;
            }


            function mul(a,b)
            {
            return a*b;
            }

            function div(a,b)
            {
            return a/b;
            }

            function rem()
            {
                return a%2;
            }


            //function for apply the switch case

                function switchstate(a,b,operation)
                {
                    switch (operation) {
                        case '+':
                        return add(a,b)
                            
                        case '-':
                            return sub(a,b)

                            case '+':
                        return mul(a,b)

                        case '+':
                        return div(a,b)

                        case '%':
                        return rem(a,b)
                    
                        default:
                            break;
                    }
                }
            
        
                  let num1=5;
                  let num2=10;

                  console.log(`Addition: ${num1} + ${num2} = ${switchstate('+', num1, num2)}`);





}