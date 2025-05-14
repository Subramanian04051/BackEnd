let a=[0,1,2,3,4,5,0,2,0,1],length=a.length,k=prompt('Enter number of rotations')

for(let i=0;i<k;i++)
{
    MoveLeft(a,length)
    
   
    
}
console.log(a)
function MoveLeft(a,length)
{
    let temp=0,i=0
    let j=1
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
