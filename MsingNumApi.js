//MISSING NUMBER IN AP
let a=[1,3,5,7,10,11],ap=a[1]-a[0],miss=0

for(let i=2;i<a.length;i++)
{
    if(ap==a[i]-a[i-1])
    {
        ap=a[i]-a[i-1]
}
else
{
    miss=a[i+1]-ap
    break
}
}
console.log(miss)
