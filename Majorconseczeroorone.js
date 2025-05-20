let zeroonearr=[1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1,0],count=0,max_count=0

for(let i=0;i<zeroonearr.length-1;i++)
{
    if(zeroonearr[i]==zeroonearr[i+1])
    {
        count++
    }
    else
    {
        if(max_count<count)
        {
            max_count=count
            count=1
        }
    }
    
}
console.log(Math.max(max_count,count))
