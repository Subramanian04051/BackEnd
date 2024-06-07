let a=[1,5,2,10,0],rotations=a.length-1,sum=0,max_sum=0

for(let i=0;i<rotations;i++)
{
    a.push(a[0])
    a.shift()
    for(let j=0;j<a.length;j++)
    {
        sum+=j*a[j]
    }
    if(sum>max_sum)
    {
        max_sum=sum
    }
    sum=0
}
console.log(max_sum)
