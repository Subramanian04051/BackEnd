let a=[1,2,3,4,0,4,5,0],sum=9,left=0,right=a.length-1,mid=Math.ceil((a.length))/2,found=false,found_index={}
a.sort()

console.log(mid)
while(left<right)
{
    if(a[mid]+a[left]+a[right]<sum)
    {
        left++
        mid++
    }
    else if(a[mid]+a[left]+a[right]>sum)
    {
        right--
        mid--
    }
    else
    {
        found_index[mid]=a[mid]
        found_index[left]=a[left]
        found_index[right]=a[right]
        found=!found
        break
        
    }
}
console.log(found_index)
