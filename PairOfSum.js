let input=[1, 5, 7, -1, 5], Sum = 6,len=input.length,j=0,pair=[]


for(let i=0;i<len-2;i++)
{
    j=i+1
    while(j<len)
    {
        if(Sum==input[i]+input[j])
        {
            
            pair.push({first:input[i],second:input[j]})
        }
        j++
    }
}
console.log(pair)
