async function save()
{
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
resolve("Promise resolved");
        },2000)
    });


    const result=await promise;

    console.log(result);
}

save();

async function handleError()
{
    try {
        await new Promise((resolve,reject)=>{
                reject("error messaage")
        })
    } catch (error) {
        console.error("error ")
    }
}

handleError();

//fetching API  using promises

const promisedata=new Promise ((resolve,reject)=>{
  const res=  fetch('https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3');
})
const data=fetch("https://github.com/hiteshchoudhary")
console.log(data);