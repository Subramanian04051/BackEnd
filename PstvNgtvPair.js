let a=[1,2,3,4,5,-5,-2,-4],pair=[],traversed=[]

for(let i=0;i<a.length;i++)
{
    if(!traversed.includes(a[i]))
    {
        let index=a.findIndex((va)=>
        {
            return va==-a[i]
        })
        //console.log(index)
        if(index!=-1)
        {
            pair.push(`${a[i]},${a[index]}`)
            traversed.push(a[i])
            traversed.push(a[index])
        }
        
    }
    
}
console.log(pair)
