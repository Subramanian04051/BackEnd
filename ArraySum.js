

let arr=[1,2,3,4,5,10,6,7,19,13,45,60]
Sum(arr,function(result)
{
    console.log(result)
})

function Sum(arr,callback)
{
    let sum=0
    arr.forEach((value)=>
    {
        sum+=value
    })
    callback(sum+arr.length)
}