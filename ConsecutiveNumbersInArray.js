let a=[8,10,12,11,7],n=a.length-1,cons=true
//a.sort()
let max=Math.max(...a)
let min=Math.min(...a)
console.log(a)
for(let i=min;i<max;i++)
{
    if(!a.includes(i))
    {
        cons=false
        break
    }
    
}
console.log(cons)
