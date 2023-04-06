

function OddBall(arr)
{
    let sum=0
    for(let i=1;i<=arr.length-1;i=i+2)
    {
        console.log(i)
        sum+=arr[i]
    }
    return sum
}

console.log(OddBall([10,23,24,53,57,34,63,12,45,67,475,38]))