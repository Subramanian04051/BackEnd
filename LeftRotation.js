let a=[7,2,6,1,0,4],temp=0

for(let i=a.length-1;i>=1;i--)
{
    temp=a[i-1]
    a[i-1]=a[i]
    a[i]=temp
}
console.log(a)
