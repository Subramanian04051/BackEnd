let a=[-1,4,3,2,5],miss=0,length=a.length

for(let i=1;i<=length;i++)
{
    if(!a.includes(i))
    {
        miss=i
        break
    }
}
console.log(miss)
