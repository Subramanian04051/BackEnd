let a= [1, 2, 2],k=1,count=new Array(a.length-k+1),count_obj={},count_index=0

for(let i=0;i<a.length;i=i+k)
{
    b=a.slice(i,i+k)
    console.log(b)
    for(let j=0;j<b.length;j++)
    {
        if(count_obj[b[j]]==undefined)
        {
            count_obj[b[j]]=1
        }
        
    }
    console.log((Object.keys(count_obj)).length)
    count[count_index++]=(Object.keys(count_obj)).length
    count_obj={}
}
console.log(count)
