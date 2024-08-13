//pallindrome

function checkPall(num){
    let digit=0;
    // let orginal=num;
        while(num>0){
            let sum=num%10;
             digit=digit *10 +sum;
            num=(num/10);
        }
        // if (digit===num) {

        //     return true
            
        // }
        // else {
        //     return false
        // }
        return num=== digit
}

let num=121;

console.log(checkPall(num));
