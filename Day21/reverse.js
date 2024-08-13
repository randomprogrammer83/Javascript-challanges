        const reverse=(arr)=>{
          let left=0;
          let right=arr.length-1;
                    if (arr.length==0 || arr.every((num)=> num<=0)) {
                        return arr;
                    }
            while(left<right){

                let temp=arr[left];
                arr[left]=arr[right];
                arr[right]=temp;
                left++;
                right--;
            }

      
           return arr;

        }
    
                
        let  arr=[-1,2,3,4];
        console.log(reverse(arr));

        
        