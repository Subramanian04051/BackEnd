let a=[0,1,0,1],n=a.length,one_count=0,b=[]

for(let i=0;i<n;i++)
{
    if(a[i]==0)
    {
      b.push(a[i])  
    }
    else if(a[i]==1)
    {
        one_count++
    }
}
for(let i=0;i<one_count;i++)
{
    b.push(1)
}
console.log(b)
