let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9], k = 3 ,left=0,right=0,newarr=[]


for(let i=0;i<arr.length;i=i+k)
{
    left=i
    right=i+k-1
    if(arr[right]!=undefined && arr[left]!=undefined)
    {
    while(right>=left)
    {
        temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp
        left++
        right--
    }        
    }
   
   
    
}
 console.log(arr)
