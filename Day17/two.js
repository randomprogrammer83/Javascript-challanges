//selection sort

let n=5;
let arr=[64,34,25,12,22];
let i=0;
let mid;

for ( i= 0;  i< arr.length-1; i++) {
     mid=i;
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[mid]>arr[j])
        {
            mid=j;
        }
    }

        if (mid!= i) {
            let temp=arr[mid];
            arr[mid]=arr[i];
            arr[i]=temp;

        }
    }
    


console.log("sorted array",arr);
