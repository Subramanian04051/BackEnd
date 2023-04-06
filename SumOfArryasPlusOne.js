
const Sum=((arr)=>
{
    let sum=0
    arr.forEach((value)=>
    {
        sum+=value
    })
    return sum+arr.length
    
})
console.log(Sum([1,2,3,4,5,10,6,7,19,13,45,60]))
