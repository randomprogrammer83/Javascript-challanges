//Array Methods
// 1 Map

let arr=[1,2,3,4,5];

arr.map((item)=>{
    item ++;
    console.log(item);
})

// 2 Filter Method

let num=[1,2,3,4,5,6];

let num1=num.filter((items)=>{
  return items%2==0;
})

console.log(num1);


/// Reduce Method

{

let num=[1,2,3,4];

let sum=0;



 let res=num.reduce((acc,curr)=>{
    return acc+curr;
})
console.log(res);

}
  console.log("Itteration part started");
// Array itteration
{
// 1 array itteration using the for loop
let arr=[1,2,3,4,5,6,7,8,9];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
    }




// 2 Array itter. using for each
let arr2=[1,2,3,4,5,6,7,8,9]

   arr2.forEach(items => {
    console.log(items);
   });


}


{
// 2d arrray in js

let arr=[[1,2,3,],
[3,4,5,],
[5,6,7]
];
console.log(arr);

  for(let i=0;i<arr.length;i++)
  {
    for(let j=0;j<arr[i].length;j++)
    {
        console.log(arr[i][j]);
        console.log("second line");
        console.log(arr[4][4]);
    }
  }
}