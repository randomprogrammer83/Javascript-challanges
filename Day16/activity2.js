//fibnoacic series

function fibo(n){
    if(n==0){
            return 0
    }

    if (n==1) {
        return 1
    }
    return fibo(n-1)+ fibo(n-2)
}

let n=10;
let result=fibo(n);
console.log(result);