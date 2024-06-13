let arr = [2, 5, 1, 2, 7, 3, 0], k = 2,sum=0,left=0,right=arr.length-1,max_sum_arr=[]

for(let i=0;i<arr.length;i=i+k)
{
    left=i
    right=i+k-1
    while(left<right)
    {
        if(arr[left])
        {
            sum+=arr[left]
            left++
        }
        if(arr[right])
        {
        sum+=arr[right]    
        
        }
        left++
        right--
       console.log(sum)
    }
    max_sum_arr.push(sum)
    sum=0
}
max_sum_arr.sort()
let max_sum_len=max_sum_arr.length-1
let tot_sum=0
for(let i=0;i<k;i++)
{
    tot_sum+=max_sum_arr[max_sum_len-i]
    
}
console.log(tot_sum)
