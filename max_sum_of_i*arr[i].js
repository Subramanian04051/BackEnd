let a=[1,2,3,4],rotations=a.length-1,sum=0,max_sum=0

for(let i=0;i<rotations;i++)
{
    
    for(let j=0;j<a.length;j++)
    {
        sum+=j*a[j]
    }
    //console.log(sum)
    if(sum>max_sum)
    {
        max_sum=sum
    }
    sum=0
    a.push(a[0])
    a.shift()
}
console.log(max_sum)
