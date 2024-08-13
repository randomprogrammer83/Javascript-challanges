//concept of memoization 


function memo(fn){
    let result=100;
    return function(...args){
        if (args.length!=0) {
        console.log(result +100);
        }
    }
    return memo(fn);
}

memo();
