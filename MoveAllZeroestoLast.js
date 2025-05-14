let a=[0,1,2,3,4,5,0,2,0,1],length=a.length

for(let i=0;i<length;i++)
{
    if(a[i]==0)
    {
      a=MoveLast(a,i,length)
    }
    
   
    
}
console.log(a)
function MoveLast(a,i,length)
{
    let temp=0
    let j=i+1
    while(j<length)
    {
        temp=a[i]
        a[i]=a[j]
        a[j]=temp
        i++
        j++
    }
    
    return a
}
