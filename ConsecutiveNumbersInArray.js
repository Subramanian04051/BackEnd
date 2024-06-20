let a=[8,10,12,11,7],n=a.length-1,cons='yes'
//a.sort()
let max=a[0]
let min=a[0]
for(let i=0;i<a.length;i++)
{
    if(max<a[i])
    {
        max=a[i]
    }
    if(min>a[i])
    {
        min=a[i]
    }
}
console.log(a)
for(let i=min;i<max;i++)
{
    if(!a.includes(i))
    {
        cons='no'
        break
    }
    
}
console.log(cons)
