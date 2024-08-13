const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 is resolved");
        },2000);
})
const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 is resolved");
        },1000);
})


Promise.race([promise,promise1]).then((res)=>{
    console.log(res);
})


// promise.all 

const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 is resolved");
        },2000);
})
const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 2 is resolved");
        },1000);
})


Promise.all([promise,promise1]).then((res)=>{
    console.log(res);
})