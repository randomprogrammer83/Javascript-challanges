


const  promsie1=new Promise(function(resolve,reject){
     setTimeout(()=>{
resolve();
// reject();
     },2000)
}).then(()=>{
    // console.log("promise resolved");
})


const  promsie2=new Promise(function(resolve,reject){
    setTimeout(()=>{

reject();
    },3000)
}).catch(()=>{
//    console.log("promise rejected");
})

// chaining

const promise=new Promise((resolve,reject)=>{
    const data= fetch("https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3");

}).then((data)=>{
    // console.log(data);
}).catch((dataof)=>{
    // console.log(dataof);
})

const data= fetch("https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3");
console.error(data);