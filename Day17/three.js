//linear search

let arr=[1,2,3,4,5];
let target=5;
for(let i=0;i<arr.length;i++){
            if(arr[i]===target)
            {
                console.log("Element found at index",i,"and the element is ",target);
                break;
            }
}