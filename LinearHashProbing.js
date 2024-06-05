let a=[1,2,3,4,54,10,14],n=a.length,h=[],index=0

a.forEach((val)=>
{
   index=getIndex(h,val,val%n,n)
   //console.log(index)
       h[index]=val
})
console.log(h)

function getIndex(h,val,index,length)
{
    if(index>length)
    {
        index=0
    }
    if(h[index]!=undefined && h[index]!=null)
    {
        return getIndex(h,val,index+1,length)
    }
    else
    {
        return index
    }
}
