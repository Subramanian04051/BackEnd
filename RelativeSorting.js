let a=[1,8,1,6],b=[1,9,6,7],index_arr=[],merged_arr=[],rem_arr=[]

for(let i=0;i<a.length;i++)
{
    if(!b.includes(a[i]))
    {
        rem_arr.push(a[i])
    }
}


for(let i=0;i<b.length;i++)
{
    index_arr=getAllIndexes(a,b[i])
    if(index_arr.length>0)
    {
      
      for(let j=0;j<index_arr.length;j++)
      {
          merged_arr.push(a[index_arr[j]])
          //a.splice()
          //a.slice(j+1,a.length))
      }
    }
}
//console.log(rem_arr)


rem_arr.sort()

for(let i=0;i<rem_arr.length;i++)
{
    merged_arr.push(rem_arr[i])
}
console.log(merged_arr)
function getAllIndexes(a,values)
{
    let all_index=[]
    for(let i=0;i<a.length;i++)
    {
        if(values==a[i])
        {
            all_index.push(i)
        }
    }
    return all_index
}
